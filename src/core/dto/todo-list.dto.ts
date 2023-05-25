import { number, object, string, type ObjectSchema } from 'yup'

export type TodoListStatus = 'todo' | 'doing' | 'done' | null

export interface TodoListDto {
  title: string
  task: any
  status: TodoListStatus
}

export const TodoListSchema: ObjectSchema<TodoListDto> = object({
  title: string().required(),
  task: number().required(),
  status: string().oneOf(['todo', 'doing', 'done']).required()
})
