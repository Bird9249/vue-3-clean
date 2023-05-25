import type { Label, LabelDto } from '@/core'
import type { IGenericResponse } from '@/core/abstracts/generic-response.abstract'
import { HttpService } from '@/framework/services'
import { LabelFactory } from './label.factory'

export class LabelUseCase {
  constructor(private http: HttpService, private factory: LabelFactory) {}

  async create(body: LabelDto): Promise<IGenericResponse<Label>> {
    const label = this.factory.createNewData(body)
    const created = await this.http.label.create(label)

    return created
  }

  async findAll(): Promise<IGenericResponse<Label[]>> {
    return await this.http.label.findAll()
  }

  async findOne(id: string): Promise<IGenericResponse<Label>> {
    return await this.http.label.findOne(id)
  }

  async update(id: string, body: LabelDto): Promise<IGenericResponse<Label>> {
    const label = this.factory.updateData(body)
    const updated = await this.http.label.update(id, label)

    return updated
  }

  async remove(id: string): Promise<IGenericResponse<Label>> {
    const removed = await this.http.label.remove(id)

    return removed
  }
}
