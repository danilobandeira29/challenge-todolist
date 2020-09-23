import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';

class UsersRepository {
  private users: User[] = [];

  constructor() {
    this.users = [];
  }

  public async all(): Promise<User[]> {
    return this.users;
  }

  public async create({ email, name }: ICreateUserDTO): Promise<User> {
    const createUser = new User({ name, email });
    this.users.push(createUser);
    return createUser;
  }
}

export default UsersRepository;
