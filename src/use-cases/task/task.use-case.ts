import type { Task, TaskDto } from '@/core'
import type { IGenericResponse } from '@/core/abstracts/generic-response.abstract'
import { HttpService } from '@/framework/services'
import { TaskFactory } from './task.factory'

export class TaskUseCase {
  constructor(private http: HttpService, private factory: TaskFactory) {}

  async create(body: TaskDto): Promise<IGenericResponse<Task>> {
    const task = this.factory.createNewData(body)
    const created = await this.http.task.create(task)

    return created
  }

  async findAll(): Promise<IGenericResponse<Task[]>> {
    return await this.http.task.findAll()
  }

  async findOne(id: string): Promise<IGenericResponse<Task>> {
    return await this.http.task.findOne(id)
  }

  async update(id: string, body: TaskDto): Promise<IGenericResponse<Task>> {
    const label = this.factory.updateData(body)
    const updated = await this.http.task.update(id, label)

    return updated
  }

  async remove(id: string): Promise<IGenericResponse<Task>> {
    const removed = await this.http.task.remove(id)

    return removed
  }
}
