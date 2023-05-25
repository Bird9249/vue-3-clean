import { date, number, object, string, type ObjectSchema } from 'yup'

export interface TaskDto {
  title: string
  label: any
  issueDate: Date | string | null
  duoDate: Date | string | null
}

export const TaskSchema: ObjectSchema<TaskDto> = object({
  title: string().required(),
  issueDate: date().required(),
  duoDate: date().required(),
  label: number().required()
})
