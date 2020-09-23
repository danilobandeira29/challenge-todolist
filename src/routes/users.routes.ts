import { Router, Request, Response } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/', async (request: Request, response: Response) => {
  const users = await usersRepository.all();

  return response.json(users);
});

usersRouter.post('/', async (request: Request, response: Response) => {
  try {
    const { name, email } = request.body;

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({ name, email });

    return response.json(user);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

export default usersRouter;
