import { Task, type TaskDto } from '@/core'

export class TaskFactory {
  createNewData(body: TaskDto) {
    const newData = new Task()
    newData.title = body.title
    newData.label = body.label
    newData.issueDate = body.issueDate as string
    newData.duoDate = body.duoDate as string

    return newData
  }

  updateData(body: TaskDto) {
    const newData = new Task()
    newData.title = body.title
    newData.label = body.label
    newData.issueDate = body.issueDate as string
    newData.duoDate = body.duoDate as string

    return newData
  }
}
