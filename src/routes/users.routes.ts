import { Router, Request, Response } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';
import AuthenticateUserService from '../services/AuthenticateUserService';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/', async (request: Request, response: Response) => {
  const users = await usersRepository.all();

  return response.json(users);
});

usersRouter.post('/', async (request: Request, response: Response) => {

    const { name, email, password } = request.body;

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({ name, email, password });

    return response.json(user);

});

usersRouter.post('/sessions', async (request: Request, response: Response) => {

    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService(usersRepository);

    const userAuthenticated = await authenticateUser.execute({
      email,
      password,
    });

    return response.json(userAuthenticated);

});

export default usersRouter;
