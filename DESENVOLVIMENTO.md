# 🚀 GUIA COMPLETO: Frontend + Backend + GitHub

## 📋 Checklist de Entrega (2 Semanas)

### Semana 1: Desenvolvimento ✅

#### ✅ Semana 1 - Dia 1-2: Preparar Ambiente
- [ ] Instalar Node.js (https://nodejs.org/)
- [ ] Instalar Git (https://git-scm.com/)
- [ ] Instalar Visual Studio Code

#### ✅ Semana 1 - Dia 3-4: Testar Localmente

**1. Instalar dependências do Backend:**
```bash
cd backend
npm install
```

**2. Iniciar o Backend:**
```bash
npm start
```
> O servidor estará em: `http://localhost:3000/api`

**3. Em outro terminal, iniciar o Frontend:**
```bash
cd frontend
# Opção 1: Usar Live Server (extensão do VS Code)
# Opção 2: Python
python -m http.server 5500
```
> Acesse: `http://localhost:5500`

**4. Testar a aplicação:**
- [ ] Adicionar tarefa ➕
- [ ] Editar tarefa ✏️
- [ ] Marcar concluída ✅
- [ ] Deletar tarefa 🗑️
- [ ] Limpar tudo

#### ✅ Semana 1 - Dia 5-7: Melhorias e Testes
- [ ] Adicionar validações
- [ ] Testar erros
- [ ] Documentar código
- [ ] Fazer commits regulares

---

### Semana 2: GitHub e Deployment 📤

#### ✅ Semana 2 - Dia 1-3: Preparar e Subir no GitHub

**1. Criar repositório GitHub:**
- Acesse: https://github.com/new
- Nome: `gerenciador-tarefas` (ou outro nome)
- Descrição: "Aplicação completa de gerenciamento de tarefas"
- Escolha: Public ou Private
- Clique em "Create repository"

**2. Configurar Git localmente:**
```bash
# Navegue até a pasta do projeto
cd "c:\Users\ricar\OneDrive\Área de Trabalho\Atividade 1 solar"

# Inicializar repositório
git init

# Adicionar arquivo de configuração
git add .

# Primeiro commit
git commit -m "Initial commit: Projeto estruturado com Frontend e Backend"

# Adicionar repositório remoto (substitua URL)
git remote add origin https://github.com/SEU_USUARIO/gerenciador-tarefas.git

# Mudar branch para main (se necessário)
git branch -M main

# Fazer primeiro push
git push -u origin main
```

**3. Estrutura esperada no GitHub:**
```
📦 gerenciador-tarefas
 ┣ 📂 frontend/
 ┃ ┣ 📄 index.html
 ┃ ┣ 📄 style.css
 ┃ ┗ 📄 app.js
 ┣ 📂 backend/
 ┃ ┣ 📄 server.js
 ┃ ┣ 📄 package.json
 ┃ ┗ 📄 tasks.json
 ┣ 📄 README.md
 ┣ 📄 .gitignore
 ┗ 📄 DESENVOLVIMENTO.md (este arquivo)
```

#### ✅ Semana 2 - Dia 4-5: Deploy (BONUS)

**Opção 1: Vercel (Frontend)**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
cd frontend
vercel
```

**Opção 2: Heroku ou Railway (Backend)**
- Heroku: https://www.heroku.com/
- Railway: https://railway.app/

**Opção 3: GitHub Pages (Frontend estático)**
```bash
# Já está pronto! Apenas habilite em Settings > Pages
```

#### ✅ Semana 2 - Dia 6-7: Documentação e Ajustes Finais
- [ ] Revisar README.md
- [ ] Adicionar prints/gifs do projeto
- [ ] Verificar links
- [ ] Último commit
- [ ] Pronto para apresentação! 🎉

---

## 🔧 Comandos Git Úteis

### Primeiro acesso (Configure suas credenciais)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

### Fazer commits regulares
```bash
# Ver status
git status

# Adicionar arquivos específicos
git add frontend/index.html

# Ou adicionar tudo
git add .

# Fazer commit
git commit -m "Descrição clara da mudança"

# Enviar para GitHub
git push origin main
```

### Boas práticas de commits
```bash
# ✅ BOM
git commit -m "Adicionar validação de email no formulário"

# ✅ BOM
git commit -m "Corrigir bug: tarefa não salva quando descrição está vazia"

# ❌ RUIM
git commit -m "Mudanças"
git commit -m "Fix"
```

---

## 📱 Estrutura de Pastas Recomendada

```
Atividade 1 solar/
├── frontend/
│   ├── index.html          # Interface principal
│   ├── style.css           # Estilos
│   ├── app.js              # Lógica JavaScript
│   └── assets/             # Imagens, ícones (opcional)
├── backend/
│   ├── server.js           # Servidor Express
│   ├── package.json        # Dependências
│   ├── tasks.json          # Dados persistentes
│   └── controllers/        # (Futuro) Lógica separada
├── .gitignore              # Arquivos ignorados
├── README.md               # Documentação principal
└── DESENVOLVIMENTO.md      # Guia de desenvolvimento
```

---

## 🎨 Melhorias Opcionais para Próxima Fase

### Funcionalidades
- [ ] Filtrar tarefas por prioridade
- [ ] Ordenar por data de criação
- [ ] Buscar tarefas
- [ ] Categorias/Tags
- [ ] Data de vencimento

### Tecnologia
- [ ] Banco de dados (MongoDB/PostgreSQL)
- [ ] Autenticação (Login/Senha)
- [ ] Deploy automático (GitHub Actions)
- [ ] Testes unitários
- [ ] Variáveis de ambiente

### Interface
- [ ] Tema claro/escuro
- [ ] Responsivo aprimorado
- [ ] Animações
- [ ] Ícones melhores

---

## 🆘 Troubleshooting

### Erro: "Cannot find module 'express'"
```bash
# Solução: Instalar dependências
cd backend
npm install
```

### Erro: "Port 3000 already in use"
```bash
# Opção 1: Parar o processo
taskkill /PID <PID> /F

# Opção 2: Usar outra porta
# No server.js, mudar: const PORT = 3001;
```

### Frontend não conecta ao Backend
```bash
# Verificar se backend está rodando
curl http://localhost:3000/api/status

# Se não funcionar, reiniciar:
npm start
```

---

## 📚 Recursos para Estudar

- MDN Web Docs: https://developer.mozilla.org/pt-BR/
- Express.js: https://expressjs.com/
- Git Guide: https://git-scm.com/book/pt-BR/v2
- GitHub Docs: https://docs.github.com/pt

---

## ✨ Checklist Final de Entrega

- [ ] Projeto estruturado (frontend + backend)
- [ ] Backend funcionando (npm start)
- [ ] Frontend conectado ao backend
- [ ] Todos CRUD funcionando (Create, Read, Update, Delete)
- [ ] .gitignore configurado
- [ ] README.md completo
- [ ] Repositório no GitHub
- [ ] Commits com mensagens claras
- [ ] Testado e sem erros

---

**Data de Entrega:** 26 de novembro de 2025 📅

Boa sorte! 🚀
