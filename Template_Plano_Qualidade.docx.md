# PLANO DE GERENCIAMENTO DA QUALIDADE

**Nome do Projeto:** Gerenciador de Tarefas

**Equipe:** Equipe de Desenvolvimento - Ricardo

# 1\. OBJETIVOS DE QUALIDADE

• Garantir que todas as operações CRUD (Create, Read, Update, Delete) funcionem corretamente com taxa de sucesso de 99% ou superior

• Manter a interface responsiva e acessível, com tempo de carregamento inferior a 2 segundos em conexões de internet padrão

• Assegurar que todas as validações de entrada sejam implementadas e que o sistema trate adequadamente erros de comunicação entre frontend e backend

# 2\. REQUISITOS DE QUALIDADE


Funcionalidade:

O sistema deve permitir criar, visualizar, editar e deletar tarefas. Deve suportar marcação de tarefas como concluídas, definição de prioridades (Baixa, Média, Alta) e persistência de dados no servidor. Todas as operações devem ser realizadas através de API REST com validação de dados obrigatórios (título e prioridade).

Desempenho:

O backend deve responder às requisições em menos de 500ms. A interface deve carregar em menos de 2 segundos. O sistema deve suportar pelo menos 100 tarefas simultâneas sem degradação significativa de performance. A API deve processar requisições concorrentes adequadamente.

Segurança:

Implementar validação de entrada no backend para prevenir injeção de dados maliciosos. Utilizar CORS configurado adequadamente. Validar todos os campos obrigatórios antes de processar requisições. Implementar tratamento de erros que não exponha informações sensíveis do sistema.

Usabilidade:

Interface intuitiva com formulário claro para adicionar tarefas. Feedback visual imediato para ações do usuário (botões de ação, estados de conclusão). Mensagens de confirmação para operações destrutivas (deletar tarefas). Indicadores visuais de prioridade (cores ou badges). Interface responsiva que funcione em diferentes tamanhos de tela.

# 3\. PAPÉIS E RESPONSABILIDADES

Gerente de Projeto: Responsável pela coordenação geral, acompanhamento de prazos e comunicação com stakeholders

Desenvolvedores: Responsáveis pelo desenvolvimento do frontend (HTML/CSS/JavaScript) e backend (Node.js/Express), implementação de funcionalidades e correção de bugs

Equipe de QA: Responsável por testar todas as funcionalidades, validar requisitos, reportar bugs e verificar a qualidade do código

Designer: Responsável pela interface do usuário, experiência do usuário (UX) e design visual da aplicação

# 4\. PROCESSOS DE QUALIDADE

• Revisão de código (Code Review): Todo código deve ser revisado por pelo menos um membro da equipe antes de ser integrado ao projeto principal

• Testes manuais sistemáticos: Testar todas as funcionalidades CRUD após cada implementação ou correção de bug

• Validação de requisitos: Verificar que cada funcionalidade implementada atende aos requisitos especificados no README e na documentação do projeto

# 5\. MÉTRICAS DE QUALIDADE

Cobertura de testes: Mínimo de 80% de cobertura de testes manuais para todas as funcionalidades principais (CRUD, validações, tratamento de erros). Testar todos os endpoints da API e todas as interações do frontend.

Taxa de defeitos: Manter taxa de defeitos críticos abaixo de 5% do total de funcionalidades. Todos os bugs críticos devem ser corrigidos antes do release. Bugs de baixa prioridade podem ser documentados para futuras melhorias.

Tempo de correção: Bugs críticos devem ser corrigidos em até 24 horas após identificação. Bugs de média prioridade em até 3 dias. Bugs de baixa prioridade podem ser tratados conforme disponibilidade da equipe.

# 6\. PLANO DE TESTES

Testes unitários: Testar funções individuais do backend (leitura/escrita de arquivos JSON, validação de dados). Testar funções JavaScript do frontend (renderização de tarefas, manipulação do DOM). Utilizar ferramentas como Jest ou Mocha para automação (futuro).

Testes de integração: Testar a comunicação entre frontend e backend através da API REST. Verificar que todas as requisições HTTP (GET, POST, PUT, DELETE) funcionam corretamente. Testar persistência de dados no arquivo tasks.json.

Testes funcionais: Testar todos os cenários de uso: criar tarefa com todos os campos, editar tarefa existente, marcar como concluída, deletar tarefa individual, limpar todas as tarefas, validar campos obrigatórios, testar diferentes prioridades.

Testes de desempenho: Verificar tempo de resposta da API (deve ser < 500ms). Testar carregamento da interface com múltiplas tarefas (10, 50, 100 tarefas). Verificar comportamento quando o backend está offline (fallback para localStorage).

# 7\. FERRAMENTAS DE QUALIDADE

• Postman ou Insomnia: Para testar endpoints da API REST de forma isolada e documentar requisições/respostas

• DevTools do Navegador: Para inspecionar requisições HTTP, debugar JavaScript, verificar erros de console e analisar performance

• Git/GitHub: Para controle de versão, rastreamento de mudanças e colaboração da equipe

# 8\. AUDITORIAS E REVISÕES

• Revisão de código antes de cada commit: Verificar que o código segue padrões estabelecidos, está documentado e não introduz bugs conhecidos

• Revisão de funcionalidades antes do release: Testar todas as funcionalidades em conjunto, verificar que os requisitos foram atendidos e validar a experiência do usuário

# 9\. TREINAMENTO E CAPACITAÇÃO

• Documentação de código: Todos os membros da equipe devem documentar funções complexas e decisões técnicas importantes no código

• Compartilhamento de conhecimento: Realizar sessões de code review e discussões sobre melhores práticas de desenvolvimento (Express.js, JavaScript moderno, APIs REST)

# 10\. GERENCIAMENTO DE RISCOS

Risco 1: Perda de dados devido a falha no armazenamento em arquivo JSON ou corrupção do arquivo tasks.json

Mitigação: Implementar backup automático do arquivo tasks.json, adicionar tratamento de erros robusto na leitura/escrita de arquivos, considerar migração futura para banco de dados (MongoDB/PostgreSQL) para maior confiabilidade

Risco 2: Problemas de comunicação entre frontend e backend (CORS, conexão perdida, backend offline)

Mitigação: Implementar fallback para localStorage quando o backend não estiver disponível, configurar CORS adequadamente, adicionar tratamento de erros e mensagens informativas ao usuário quando houver falhas de comunicação

# 11\. DOCUMENTAÇÃO

• README.md: Documentação principal do projeto com instruções de instalação, execução, estrutura do projeto e endpoints da API

• DESENVOLVIMENTO.md: Guia completo de desenvolvimento com checklist de entrega, comandos Git úteis, troubleshooting e próximas melhorias planejadas

# 12\. FEEDBACK E MELHORIA CONTÍNUA

• Coleta de feedback: Após cada release, coletar feedback dos usuários sobre funcionalidades, usabilidade e problemas encontrados. Documentar sugestões de melhoria

• Retrospectivas da equipe: Realizar reuniões periódicas para discutir o que funcionou bem, o que pode ser melhorado nos processos de desenvolvimento e qualidade, e implementar melhorias incrementais baseadas nas lições aprendidas