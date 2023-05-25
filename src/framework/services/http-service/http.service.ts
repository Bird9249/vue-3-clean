import type { IDataServices, Label, Task, TodoList } from '@/core'
import { type AxiosRequestConfig } from 'axios'
import { HttpGenericRepository } from '.'

export class HttpService implements IDataServices {
  label: HttpGenericRepository<Label>
  task: HttpGenericRepository<Task>
  todoList: HttpGenericRepository<TodoList>

  constructor(
    private LabelConfig: AxiosRequestConfig = { url: 'label' },
    private TaskConfig: AxiosRequestConfig = { url: 'task' },
    private TodoListConfig: AxiosRequestConfig = { url: 'todo-list' }
  ) {
    this.label = new HttpGenericRepository<Label>(this.LabelConfig)
    this.task = new HttpGenericRepository<Task>(this.TaskConfig)
    this.todoList = new HttpGenericRepository<TodoList>(this.TodoListConfig)
  }
}
