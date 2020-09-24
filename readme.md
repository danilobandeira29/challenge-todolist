<p align="center">
  <img src="./2tdelivery.png" alt="2t logo"/>
</p>

# Sumário
- [Sobre](#-Sobre)
- [Desafio](#-Desafio)
- [Tecnologias](#-Tecnologias)
- [Formatadores de Código](#-Formatadores-de-Código)
- [Rotas da API](#-Rotas-da-API)
- [Baixar o Projeto](#-Baixar-o-Projeto)
- [Futuras implementações](#-Futuras-implementações)


## 📝 Sobre
API REST onde é possível fazer o cadastro de usuário, iniciar sessão. Um usuário com sessão iniciada consegue criar, listar e deletar to-dos.

## 🏆 Desafio
- [x] Proposto pela 2t, onde eu tive que fazer uma api rest e front-end para a criação, listagem e exclusão de to-dos list.

## 💻 Tecnologias
- NodeJS
- ExpressJS
- API REST
- Typescript
- JSON Web Token(jwt)

## 💅 Formatadores de Código
- ESLint
- Prettier
- editorconfig

## 🔃 Rotas da API
- GET `/users` - Listagem de todos os usuários.
- POST `/users` - Criar um novo **usuário**, informando *email*, *name* e *password* no corpo da requisição.
- POST `/users/sessions` - Iniciar a **sessão do usuário** na aplicação, informando *email* e *password* no corpo da requisição.
- GET `/todos` - Listagem de todos os *to-dos* do usuário logado.
- POST `/todos` - Criar um novo *to-do* pelo usuário logado, informando o *to-do* no corpo da requisição.
- DELETE `/todos/:id` - Deletar um *to-do*, informando a **id** do *to-do* no parâmetro de rota.

## 👇 Baixar o Projeto
- Abra seu terminal para executar as seguintes linhas de comando:
```bash
  ## clonar repositório
  $ git clone https://github.com/danilobandeira29/challenge-todolist.gitt

  ## entrar no diretório
  $ cd challenge-todolist

  ## instalar as dependências do projeto(ou você pode executar 'npm install')
  $ yarn

  ## inicializando o servidor(ou você pode executar 'npm dev:server')
  $ yarn dev:server
```

## 🔮 Futuras implementações
- [ ] Criação do banco de dados(utilizando docker e mysql/postgres)
- [ ] DDD
- [ ] TDD
- [ ] SOLID
- [ ] Controllers para abstrair a lógica das rotas
- [ ] Serializar objetos antes de envia-los ao front-end

**Developed by/Desenvolvido por** 👻 <a href="https://www.linkedin.com/in/danilo-bandeira-4411851a4/">**Danilo Bandeira**</a>
