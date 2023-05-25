import { TodoList, type TodoListDto } from '@/core'

export class TodoListFactory {
  createNewData(body: TodoListDto) {
    const newData = new TodoList()
    newData.title = body.title
    newData.task = body.task
    newData.status = body.status

    return newData
  }

  updateData(body: TodoListDto) {
    const newData = new TodoList()
    newData.title = body.title
    newData.task = body.task
    newData.status = body.status

    return newData
  }
}
