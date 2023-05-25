import type { RouteRecordRaw } from 'vue-router'
import { TaskListPage, taskCreatePage, taskUpdatePage } from '..'
import taskView from '../views/task.view'

const taskRoutes: Array<RouteRecordRaw> = [
  {
    path: '/task',
    name: 'task',
    component: taskView,
    children: [
      {
        path: '/task',
        name: 'task.list',
        component: TaskListPage
      },
      {
        path: '/task/create',
        name: 'task.create',
        component: taskCreatePage
      },
      {
        path: '/task/update/:id',
        name: 'task.update',
        component: taskUpdatePage
      }
    ]
  }
]

export default taskRoutes
