import type { TodoList, TodoListDto } from '@/core'
import type { IGenericResponse } from '@/core/abstracts/generic-response.abstract'
import { HttpService } from '@/framework/services'
import type { TodoListFactory } from '.'

export class TodoListUseCase {
  constructor(private http: HttpService, private factory: TodoListFactory) {}

  async create(body: TodoListDto): Promise<IGenericResponse<TodoList>> {
    const todoList = this.factory.createNewData(body)
    const created = await this.http.todoList.create(todoList)

    return created
  }

  async findAll(): Promise<IGenericResponse<TodoList[]>> {
    return await this.http.todoList.findAll()
  }

  async findOne(id: string): Promise<IGenericResponse<TodoList>> {
    return await this.http.todoList.findOne(id)
  }

  async update(id: string, body: TodoListDto): Promise<IGenericResponse<TodoList>> {
    const todoList = this.factory.updateData(body)
    const updated = await this.http.todoList.update(id, todoList)

    return updated
  }

  async remove(id: string): Promise<IGenericResponse<TodoList>> {
    const removed = await this.http.todoList.remove(id)

    return removed
  }
}
