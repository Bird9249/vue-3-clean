import ConfirmPopup from 'primevue/confirmpopup'
import Toast from 'primevue/toast'
import { defineComponent, h } from 'vue'
import { RouterView } from 'vue-router'

const App = defineComponent(() => {
  return () => {
    return h('div', { class: '' }, [h(RouterView), h(Toast), h(ConfirmPopup)])
  }
})

export default App
