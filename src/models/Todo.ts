import { v4 } from 'uuid';
import ICreateTodoDTO from '../dtos/ICreateTodoDTO';

class Todo {
  id: string;

  todo: string;

  user_id: string;

  constructor({ todo, user_id }: Omit<ICreateTodoDTO, 'id'>) {
    this.id = v4();
    this.todo = todo;
    this.user_id = user_id;
  }
}

export default Todo;
