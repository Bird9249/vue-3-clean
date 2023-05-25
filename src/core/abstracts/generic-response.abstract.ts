export abstract class IGenericResponse<T> {
  abstract status: number

  abstract message?: string

  abstract data?: T
}
