# Aplicação MVC de gerenciamento de projetos com autenticação

API REST construída com Node.js, Express e Sequelize, que permite o gerenciamento de:

- Usuários(user)
- Tarefas(task)
- Projetos(project)

A autenticação é feita via JWT e o banco de dados utilizado é MySQL.

---

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize ORM
- MySQL
- Bcrypt (criptografia de senhas)
- JWT (JSON Web Token)

---

## Estrutura

/config
database.js

/controllers
userController.js
taskController.js
projectController.js

/models
user.js
task.js
project.js

/routes
userRoutes.js
taskRoutes.js
projectRoutes.js

server.js

---

## Lógica Principal

**Models**
Responsáveis por definir as tabelas e seus relacionamentos no banco de dados.

**User**

**Campos:**
- id 
- nome
- email
- senha

Senha armazenada de forma criptografada com bcrypt.

**Project**

**Campos:** 
- id
- nome
- descricao

Representa um projeto dentro do sistema.

**Task**

**Campos:** 
- id
- titulo
- status
- idProject
- idUser

Cada tarefa é associada a:
- Um Projeto (idProject)
- Um Usuário responsável (idUser)

**Controllers**
Contêm toda a lógica de negócio para manipular os dados.

**UserController**

- createUser — Cadastra um novo usuário (senha criptografada).
- login — Autentica usuário e gera um token JWT.
- getUser — Lista todos os usuários.
- getUserById — Busca usuário pelo ID.
- ValidarToken - Verifica o token fornecido.
- UpdateUser — Atualiza dados de um usuário.
- DeleteUser — Deleta um usuário.

**ProjectController**

- createProject — Cria um novo projeto.
- getProject — Lista todos os projetos.
- getProjectById — Busca projeto pelo ID.
- UpdateProject — Atualiza um projeto existente.
- DeleteProject — Remove um projeto.

**TaskController**

- createTask — Cria uma nova tarefa associada a um usuário e projeto.
- getTask — Lista todas as tarefas.
- getTaskById — Busca tarefa pelo ID.
- UpdateTask — Atualiza uma tarefa.
- DeleteTask — Remove uma tarefa.

---

## Banco de Dados
Conexão feita via Sequelize.

Utilização de sync({ force: true }) para recriar as tabelas ao iniciar.

---

## Funcionalidades

- Cadastro, autenticação e gerenciamento de usuários.
- Criação e gerenciamento de projetos.
- Criação e gerenciamento de tarefas vinculadas a projetos e usuários.
- Proteção de rotas com autenticação JWT.
- Operações CRUD completas para todas as entidades.

---

## Como executar o projeto

**1. Clone o repositório**
git@github.com:Felipe-G-Schmitt/AtividadeMVC.git

**2. Instale as dependências**
npm install

**3. Execute**
npm start

---

## Rotas

| Método | Rota                  | Descrição                         | Autenticação |
|--------|-----------------------|-----------------------------------|--------------|
| POST   | /register             | Cadastro de usuário               | ❌           |
| POST   | /login                | Login e geração de token          | ❌           |
| GET    | /rota/user            | Listar todos os usuários          | ✅           |
| GET    | /rota/user/:id        | Obter usuário por ID              | ✅           |
| PUT    | /rota/user/:id        | Atualizar usuário                 | ✅           |
| DELETE | /rota/user/:id        | Deletar usuário                   | ✅           |
| POST   | /rota/projects        | Criar projeto                     | ✅           |
| GET    | /rota/projects        | Listar todos os projetos          | ✅           |
| GET    | /rota/projects/:id    | Obter projeto por ID              | ✅           |
| PUT    | /rota/projects/:id    | Atualizar projeto                 | ✅           |
| DELETE | /rota/projects/:id    | Deletar projeto                   | ✅           |
| POST   | /rota/tasks           | Criar tarefa                      | ✅           |
| GET    | /rota/tasks           | Listar todas as tarefas           | ✅           |
| GET    | /rota/tasks/:id       | Obter tarefa por ID               | ✅           |
| PUT    | /rota/tasks/:id       | Atualizar tarefa                  | ✅           |
| DELETE | /rota/tasks/:id       | Deletar tarefa                    | ✅           |
