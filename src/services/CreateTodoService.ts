import TodosRepository from '../repositories/TodosRepository';
import Todo from '../models/Todo';

interface IRequest {
  todo: string;
  user_id: string;
}

class CreateTodoService {
  constructor(private todosRepository: TodosRepository) {}

  public async execute({ user_id, todo }: IRequest): Promise<Todo> {
    const createTodo = await this.todosRepository.create({ user_id, todo });

    return createTodo;
  }
}
export default CreateTodoService;
