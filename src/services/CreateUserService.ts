import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

class CreateUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const findEmailExists = await this.usersRepository.findByEmail(email);

    if (findEmailExists) {
      throw new Error('This email is already used');
    }

    const user = await this.usersRepository.create({ email, name, password });

    return user;
  }
}

export default CreateUserService;
