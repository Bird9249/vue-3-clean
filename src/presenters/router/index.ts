import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/default.layout'
import labelRoutes from '../modules/label/router'
import taskRoutes from '../modules/task/router'
import todoListRoutes from '../modules/todo-list/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      children: [...labelRoutes, ...taskRoutes, ...todoListRoutes]
    }
  ]
})

export default router
