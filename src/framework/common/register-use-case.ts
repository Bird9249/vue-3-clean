import { HttpService } from '@/framework/services'
import {
  LabelFactory,
  LabelUseCase,
  TaskFactory,
  TaskUseCase,
  TodoListFactory,
  TodoListUseCase
} from '@/use-cases'
import type { InjectionKey } from 'vue'

const httpService = new HttpService()

const labelFactory = new LabelFactory()
const labelUseCase = new LabelUseCase(httpService, labelFactory)
const labelUseCaseKey = Symbol() as InjectionKey<LabelUseCase>

const taskFactory = new TaskFactory()
const taskUseCase = new TaskUseCase(httpService, taskFactory)
const taskUseCaseKey = Symbol() as InjectionKey<TaskUseCase>

const todoListFactory = new TodoListFactory()
const todoListUseCase = new TodoListUseCase(httpService, todoListFactory)
const todoListUseCaseKey = Symbol() as InjectionKey<TodoListUseCase>

export {
  labelUseCase,
  labelUseCaseKey,
  taskUseCase,
  taskUseCaseKey,
  todoListUseCase,
  todoListUseCaseKey
}
