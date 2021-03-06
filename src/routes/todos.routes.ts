import { Router, Request, Response } from 'express';
import ListTodosOfUserService from '../services/ListTodosOfUserService';
import CreateTodoService from '../services/CreateTodoService';
import DeleteTodoService from '../services/DeleteTodoService';
import TodosRepository from '../repositories/TodosRepository';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const todosRouter = Router();
todosRouter.use(ensureAuthenticated);

const todosRepository = new TodosRepository();

todosRouter.get('/', async (request: Request, response: Response) => {
  const { id: user_id } = request.user;

  const listTodosOfUser = new ListTodosOfUserService(todosRepository);

  const listTodos = await listTodosOfUser.execute({ user_id });

  return response.json(listTodos);
});

todosRouter.post('/', async (request: Request, response: Response) => {
  const { id: user_id } = request.user;
  const { todo } = request.body;

  const createTodo = new CreateTodoService(todosRepository);

  const todoCreated = await createTodo.execute({ user_id, todo });

  return response.json(todoCreated);
});

todosRouter.delete('/:id', async (request: Request, response: Response) => {
  const { id } = request.params;

  const deleteTodo = new DeleteTodoService(todosRepository);

  await deleteTodo.execute({ id });

  return response.status(204).json();
});

export default todosRouter;
