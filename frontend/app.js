const API_URL = 'http://localhost:3000/api';
let tasks = [];
let editingId = null;

const form = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

// Buscar tarefas do backend
async function fetchTasks() {
    try {
        const response = await fetch(`${API_URL}/tasks`);
        tasks = await response.json();
        renderTasks();
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        // Fallback para localStorage se o backend não estiver disponível
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        renderTasks();
    }
}

// Renderizar tarefas
function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task-item ${task.prioridade} ${task.concluida ? 'completed' : ''}`;
        
        taskDiv.innerHTML = `
            <div class="task-title">${task.titulo}</div>
            <div class="task-description">${task.descricao}</div>
            <span class="priority-badge">${task.prioridade.toUpperCase()}</span>
            <div class="task-actions">
                <button class="btn btn-primary" onclick="toggleComplete('${task.id}')">
                    ${task.concluida ? '↩️ Desmarcar' : '✅ Concluir'}
                </button>
                <button class="btn btn-warning" onclick="editTask('${task.id}')">✏️ Editar</button>
                <button class="btn btn-danger" onclick="deleteTask('${task.id}')">🗑️ Deletar</button>
            </div>
        `;
        
        taskList.appendChild(taskDiv);
    });
}

// Adicionar/Editar tarefa
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const task = {
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        prioridade: document.getElementById('prioridade').value,
        concluida: false
    };
    
    try {
        if (editingId) {
            // Atualizar tarefa
            await fetch(`${API_URL}/tasks/${editingId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });
            editingId = null;
        } else {
            // Criar nova tarefa
            await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });
        }
        
        form.reset();
        await fetchTasks();
    } catch (error) {
        console.error('Erro ao salvar tarefa:', error);
        alert('Erro ao salvar tarefa!');
    }
});

// Alternar conclusão
window.toggleComplete = async (id) => {
    try {
        const task = tasks.find(t => t.id === id);
        await fetch(`${API_URL}/tasks/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...task, concluida: !task.concluida })
        });
        await fetchTasks();
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error);
    }
};

// Editar tarefa
window.editTask = (id) => {
    const task = tasks.find(t => t.id === id);
    document.getElementById('titulo').value = task.titulo;
    document.getElementById('descricao').value = task.descricao;
    document.getElementById('prioridade').value = task.prioridade;
    editingId = id;
};

// Deletar tarefa
window.deleteTask = async (id) => {
    if (confirm('Tem certeza que deseja deletar esta tarefa?')) {
        try {
            await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
            await fetchTasks();
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
        }
    }
};

// Limpar todas
clearBtn.addEventListener('click', async () => {
    if (confirm('Tem certeza que deseja limpar todas as tarefas?')) {
        try {
            await fetch(`${API_URL}/tasks`, { method: 'DELETE' });
            await fetchTasks();
        } catch (error) {
            console.error('Erro ao limpar tarefas:', error);
        }
    }
});

// Inicializar
fetchTasks();
