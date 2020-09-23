import { v4 } from 'uuid';

import CreateUserDTO from '../dtos/CreateUserDTO';

class User {
  id: string;

  name: string;

  email: string;

  constructor({ email, name }: Omit<CreateUserDTO, 'id'>) {
    this.email = email;
    this.name = name;
    this.id = v4();
  }
}

export default User;
