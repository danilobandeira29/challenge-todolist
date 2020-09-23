import { Router, Request, Response } from 'express';
import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/', async (request: Request, response: Response) => {
  const users = await usersRepository.all();

  return response.json(users);
});

usersRouter.post('/', async (request: Request, response: Response) => {
  const { name, email } = request.body;

  const user = await usersRepository.create({ name, email });

  return response.json(user);
});

export default usersRouter;
