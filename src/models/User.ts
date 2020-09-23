import { v4 } from 'uuid';

import ICreateUserDTO from '../dtos/ICreateUserDTO';

class User {
  id: string;

  name: string;

  email: string;

  constructor({ email, name }: Omit<ICreateUserDTO, 'id'>) {
    this.email = email;
    this.name = name;
    this.id = v4();
  }
}

export default User;
