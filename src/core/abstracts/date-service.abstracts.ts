import { Label, Task, TodoList } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract label: IGenericRepository<Label>;

  abstract task: IGenericRepository<Task>;

  abstract todoList: IGenericRepository<TodoList>;
}
