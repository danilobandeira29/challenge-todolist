import { v4 } from 'uuid';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

class User {
  id: string;

  name: string;

  email: string;

  password: string;

  constructor({ email, name, password }: Omit<ICreateUserDTO, 'id'>) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.id = v4();
  }
}

export default User;
