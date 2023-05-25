import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'

const labelView = defineComponent(() => {
  return () => {
    return [
      h('div', { class: 'flex justify-content-center align-items-center' }, [
        h('h1', { class: '' }, 'Label Management')
      ]),
      h(RouterView)
    ]
  }
})

export default labelView
