import { Router, Request, Response } from 'express';
import User from '../models/User';

const usersRouter = Router();

const usersRepository: User[] = [];

usersRouter.get('/', (request: Request, response: Response) =>
  response.json(usersRepository),
);

usersRouter.post('/', (request: Request, response: Response) => {
  const { name, email } = request.body;

  const user = new User({ name, email });

  usersRepository.push(user);

  return response.json(user);
});

export default usersRouter;
