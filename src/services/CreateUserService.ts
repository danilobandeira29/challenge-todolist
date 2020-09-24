import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError'

class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const findEmailExists = await this.usersRepository.findByEmail(email);

    if (findEmailExists) {
      throw new AppError('This email is already used');
    }

    const user = await this.usersRepository.create({ email, name, password });

    return user;
  }
}

export default CreateUserService;
