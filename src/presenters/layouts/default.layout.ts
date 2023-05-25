import { defineComponent, h, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const DefaultLayout = defineComponent(() => {
  const menus = ref<Array<{ to: string; label: string }>>([
    { to: '/label', label: 'label' },
    { to: '/task', label: 'Task' },
    { to: '/todo-list', label: 'Todo List' }
  ])

  return () => [
    h(
      'nav',
      { class: 'w-full px-5 py-3 shadow-2' },
      h(
        'div',
        { class: 'flex justify-content-center' },
        h(
          'ul',
          { class: 'flex' },
          menus.value.map(({ to, label }, idx) =>
            h(
              'li',
              { class: 'mx-2', key: idx },
              h(
                RouterLink,
                {
                  to,
                  class: 'px-3 py-2 border-round transition-duration-200 transition-all'
                },
                { default: () => label }
              )
            )
          )
        )
      )
    ),
    h(
      'main',
      { class: 'surface-0 flex justify-content-center' },
      h(
        'div',
        { class: 'overflow-hidden w-screen' },
        h('div', { class: 'py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8' }, [h(RouterView)])
      )
    )
  ]
})

export default DefaultLayout
