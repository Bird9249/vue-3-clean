import { object, ObjectSchema, string } from 'yup'
import type { Label } from '..'

export interface LabelDto extends Label {}

export const LabelSchema: ObjectSchema<LabelDto> = object({
  name: string().required(),
  color: string().required()
})
