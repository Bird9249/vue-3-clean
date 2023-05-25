import type { RouteRecordRaw } from 'vue-router'
import { todoListPage } from '..'
import { todoListCreatePage } from '../pages/todo-list-create.page'
import { todoListUpdatePage } from '../pages/todo-list-update.page'
import todoListView from '../views/todo-list.view'

const todoListRoutes: Array<RouteRecordRaw> = [
  {
    path: '/todo-list',
    name: 'todo-list',
    component: todoListView,
    children: [
      {
        path: '/todo-list',
        name: 'todo.list',
        component: todoListPage
      },
      {
        path: '/todo-list/create',
        name: 'todo.create',
        component: todoListCreatePage
      },
      {
        path: '/todo-list/update/:id',
        name: 'todo-list.update',
        component: todoListUpdatePage
      }
    ]
  }
]

export default todoListRoutes
