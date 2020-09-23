import Todo from '../models/Todo';
import ICreateTodoDTO from '../dtos/ICreateTodoDTO';

class TodosRepository {
  private todos: Todo[] = [];

  constructor() {
    this.todos = [];
  }

  public async all(user_id: string): Promise<Todo[] | undefined> {
    const todosOfUser = this.todos.filter(todo => todo.user_id === user_id);

    return todosOfUser;
  }

  public async create({ todo, user_id }: ICreateTodoDTO): Promise<Todo> {
    const createTodo = new Todo({ todo, user_id });

    this.todos.push(createTodo);

    return createTodo;
  }

  public async delete(id: string): Promise<void> {
    const filteredTodos = this.todos.filter(todo => todo.id !== id);

    this.todos = filteredTodos;
  }
}

export default TodosRepository;
