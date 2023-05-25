import type { RouteRecordRaw } from 'vue-router'
import { labelCreatePage, labelListPage, labelUpdatePage } from '..'
import labelView from '../views/label.view'

const labelRoutes: Array<RouteRecordRaw> = [
  {
    path: '/label',
    name: 'label',
    component: labelView,
    children: [
      {
        path: '/label',
        name: 'label.list',
        component: labelListPage
      },
      {
        path: '/label/create',
        name: 'label.create',
        component: labelCreatePage
      },
      {
        path: '/label/update/:id',
        name: 'label.update',
        component: labelUpdatePage
      }
    ]
  }
]

export default labelRoutes
