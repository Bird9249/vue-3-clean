import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'

const todoListView = defineComponent(() => {
  return () => {
    return [
      h('div', { class: 'flex justify-content-center align-items-center' }, [
        h('h1', { class: '' }, 'Todo List Management')
      ]),
      h(RouterView)
    ]
  }
})

export default todoListView
