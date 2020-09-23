import TodosRepository from '../repositories/TodosRepository';

interface IRequest {
  id: string;
}

class DeleteTodoService {
  constructor(private todosRepository: TodosRepository) {}

  public async execute({ id }: IRequest): Promise<void> {
    await this.todosRepository.delete(id);
  }
}

export default DeleteTodoService;
