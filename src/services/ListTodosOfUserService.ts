import TodosRepository from '../repositories/TodosRepository';
import Todo from '../models/Todo';

interface IRequest {
  user_id: string;
}

class ListTodosOfUserService {
  constructor(private todos: TodosRepository) {}

  public async execute({ user_id }: IRequest): Promise<Todo[] | undefined> {
    const todosOfUser = await this.todos.all(user_id);

    return todosOfUser;
  }
}

export default ListTodosOfUserService;
