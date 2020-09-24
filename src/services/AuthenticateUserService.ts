import { sign } from 'jsonwebtoken';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: User;
}

class AuthenticateUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({ password, email }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect e-mail/password combination');
    }

    if (user.password !== password) {
      throw new AppError('Incorrect e-mail/password combination');
    }

    const token = sign({}, '1234', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
