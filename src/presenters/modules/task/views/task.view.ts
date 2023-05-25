import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'

const taskView = defineComponent(() => {
  return () => {
    return [
      h('div', { class: 'flex justify-content-center align-items-center' }, [
        h('h1', { class: '' }, 'Task Management')
      ]),
      h(RouterView)
    ]
  }
})

export default taskView
