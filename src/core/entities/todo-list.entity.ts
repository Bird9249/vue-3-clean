//@ts-nocheck
import { Task } from './task.entity'

export class TodoList {
  task: Task

  title: string

  status: 'todo' | 'doing' | 'done'
}
