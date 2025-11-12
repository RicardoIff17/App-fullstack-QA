const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Arquivo de dados
const tasksFile = path.join(__dirname, 'tasks.json');

// Função para ler tarefas
function readTasks() {
    try {
        if (fs.existsSync(tasksFile)) {
            const data = fs.readFileSync(tasksFile, 'utf-8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Erro ao ler tarefas:', error);
    }
    return [];
}

// Função para salvar tarefas
function saveTasks(tasks) {
    try {
        fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Erro ao salvar tarefas:', error);
    }
}

// ============= ROTAS =============

// GET - Listar todas as tarefas
app.get('/api/tasks', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// GET - Obter uma tarefa específica
app.get('/api/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    
    if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    
    res.json(task);
});

// POST - Criar nova tarefa
app.post('/api/tasks', (req, res) => {
    const { titulo, descricao, prioridade, concluida } = req.body;
    
    if (!titulo) {
        return res.status(400).json({ error: 'Título é obrigatório' });
    }
    
    const tasks = readTasks();
    const newTask = {
        id: Date.now().toString(),
        titulo,
        descricao: descricao || '',
        prioridade: prioridade || 'baixa',
        concluida: concluida || false,
        criadoEm: new Date()
    };
    
    tasks.push(newTask);
    saveTasks(tasks);
    
    res.status(201).json(newTask);
});

// PUT - Atualizar tarefa
app.put('/api/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const index = tasks.findIndex(t => t.id === req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    
    tasks[index] = {
        ...tasks[index],
        ...req.body,
        id: req.params.id // Manter o ID original
    };
    
    saveTasks(tasks);
    res.json(tasks[index]);
});

// DELETE - Deletar tarefa específica
app.delete('/api/tasks/:id', (req, res) => {
    const tasks = readTasks();
    const filteredTasks = tasks.filter(t => t.id !== req.params.id);
    
    if (tasks.length === filteredTasks.length) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    
    saveTasks(filteredTasks);
    res.json({ message: 'Tarefa deletada com sucesso' });
});

// DELETE - Deletar todas as tarefas
app.delete('/api/tasks', (req, res) => {
    saveTasks([]);
    res.json({ message: 'Todas as tarefas foram deletadas' });
});

// Rota de teste
app.get('/api/status', (req, res) => {
    res.json({ status: 'Backend funcionando! ✅' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📍 API disponível em http://localhost:${PORT}/api`);
});
