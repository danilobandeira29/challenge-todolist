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

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(findUser => findUser.email === email);

    return user;
  }

  public async create({
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<User> {
    const createUser = new User({ name, email, password });
    this.users.push(createUser);
    return createUser;
  }
}

export default UsersRepository;
