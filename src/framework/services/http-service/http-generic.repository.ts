import type { IGenericRepository } from '@/core'
import type { IGenericResponse } from '@/core/abstracts/generic-response.abstract'
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse
} from 'axios'

export class HttpGenericRepository<T> implements IGenericRepository<T> {
  private baseApi: AxiosInstance

  constructor(private axiosConfig: AxiosRequestConfig) {
    this.baseApi = axios.create({
      baseURL: 'http://localhost:3000/api/'
    })
  }

  async create(item: T): Promise<IGenericResponse<T>> {
    return await this.baseApi({
      method: 'post',
      url: this.axiosConfig.url,
      data: item
    })
      .then((res: AxiosResponse<IGenericResponse<T>, T>): IGenericResponse<T> => {
        return {
          data: res.data.data,
          message: res.data.message,
          status: res.status
        }
      })
      .catch((err: AxiosError<T, T>): IGenericResponse<T> => {
        return {
          message: err.message,
          status: err.status as number
        }
      })
  }

  async findAll(): Promise<IGenericResponse<T[]>> {
    return await this.baseApi({
      method: 'get',
      url: this.axiosConfig.url
    })
      .then((res: AxiosResponse<IGenericResponse<T[]>, T>): IGenericResponse<T[]> => {
        return {
          data: res.data.data,
          status: res.status
        }
      })
      .catch((err: AxiosError<T, T>): IGenericResponse<T[]> => {
        return {
          message: err.message,
          status: err.status as number
        }
      })
  }

  async findOne(id: string): Promise<IGenericResponse<T>> {
    return await this.baseApi({
      method: 'get',
      url: this.axiosConfig.url + `/${id}`
    })
      .then((res: AxiosResponse<IGenericResponse<T>, T>): IGenericResponse<T> => {
        return {
          data: res.data.data,
          status: res.status
        }
      })
      .catch((err: AxiosError<T, T>): IGenericResponse<T> => {
        return {
          message: err.message,
          status: err.status as number
        }
      })
  }

  async update(id: string, item: T): Promise<IGenericResponse<T>> {
    return await this.baseApi({
      method: 'patch',
      url: this.axiosConfig.url + `/${id}`,
      data: item
    })
      .then((res: AxiosResponse<IGenericResponse<T>, T>): IGenericResponse<T> => {
        return {
          data: res.data.data,
          message: res.data.message,
          status: res.status
        }
      })
      .catch((err: AxiosError<T, T>): IGenericResponse<T> => {
        return {
          message: err.message,
          status: err.status as number
        }
      })
  }

  async remove(id: string): Promise<IGenericResponse<T>> {
    return await this.baseApi({
      method: 'delete',
      url: this.axiosConfig.url + `/${id}`
    })
      .then((res: AxiosResponse<IGenericResponse<T>, T>): IGenericResponse<T> => {
        return {
          data: res.data.data,
          message: res.data.message,
          status: res.status
        }
      })
      .catch((err: AxiosError<T, T>): IGenericResponse<T> => {
        return {
          message: err.message,
          status: err.status as number
        }
      })
  }
}
