# 📝 Gerenciador de Tarefas

Um aplicativo completo de gerenciamento de tarefas com **Frontend** (HTML/CSS/JavaScript) e **Backend** (Node.js/Express).

## 🎯 Funcionalidades

- ✅ Criar novas tarefas
- ✅ Editar tarefas existentes
- ✅ Deletar tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Priorizar tarefas (Baixa, Média, Alta)
- ✅ Persistência de dados no servidor
- ✅ API REST completa

## 📁 Estrutura do Projeto

```
.
├── frontend/          # Aplicação Frontend
│   ├── index.html     # HTML principal
│   ├── style.css      # Estilos
│   └── app.js         # JavaScript/Lógica
│
├── backend/           # API Backend
│   ├── server.js      # Servidor Express
│   ├── package.json   # Dependências
│   └── tasks.json     # Armazenamento de dados
│
├── README.md          # Este arquivo
└── .gitignore         # Arquivos a ignorar no Git
```

## 🚀 Como Executar

### Backend

1. **Instalar dependências:**
```bash
cd backend
npm install
```

2. **Iniciar o servidor:**
```bash
npm start
```

O servidor estará disponível em: `http://localhost:3000`

### Frontend

1. **Opção 1 - Servidor local (recomendado):**
```bash
cd frontend
# Use uma extensão como Live Server do VS Code
# ou execute um servidor Python:
python -m http.server 5500
```

2. **Opção 2 - Abrir direto no navegador:**
```bash
# Abra o arquivo frontend/index.html no navegador
```

Acesse: `http://localhost:5500`

## 📡 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/tasks` | Listar todas as tarefas |
| GET | `/api/tasks/:id` | Obter uma tarefa |
| POST | `/api/tasks` | Criar nova tarefa |
| PUT | `/api/tasks/:id` | Atualizar tarefa |
| DELETE | `/api/tasks/:id` | Deletar tarefa |
| DELETE | `/api/tasks` | Deletar todas as tarefas |

## 📝 Exemplo de Requisição

### Criar tarefa:
```json
POST /api/tasks
{
  "titulo": "Estudar JavaScript",
  "descricao": "Aprender async/await",
  "prioridade": "alta"
}
```

### Resposta:
```json
{
  "id": "1234567890",
  "titulo": "Estudar JavaScript",
  "descricao": "Aprender async/await",
  "prioridade": "alta",
  "concluida": false,
  "criadoEm": "2025-11-12T10:30:00.000Z"
}
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)
- Fetch API

### Backend
- Node.js
- Express.js
- CORS
- JSON (armazenamento)

## 💾 Dependências

**Backend:**
- express: ^4.18.2
- cors: ^2.8.5
- nodemon: ^3.0.1 (dev)

## 🔧 Configuração do Ambiente

1. **Clone ou baixe o projeto**
2. **Crie um arquivo `.env` (opcional):**
```
PORT=3000
```

3. **Instale as dependências do backend:**
```bash
cd backend && npm install
```

## 📖 Próximas Melhorias

- [ ] Autenticação de usuários
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Testes automatizados
- [ ] Deploy na nuvem
- [ ] Aplicação mobile

## 👥 Autores

Desenvolvido como parte da atividade de Engenharia de Software.

## 📄 Licença

MIT License

---

**Entrega:** 2 semanas 📅
