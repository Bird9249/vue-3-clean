import type { IGenericResponse } from './generic-response.abstract'

export abstract class IGenericRepository<T> {
  abstract create(item: T): Promise<IGenericResponse<T>>

  abstract findAll(): Promise<IGenericResponse<T[]>>

  abstract findOne(id: string): Promise<IGenericResponse<T>>

  abstract update(id: string, item: T): Promise<IGenericResponse<T>>

  abstract remove(id: string): Promise<IGenericResponse<T>>
}
