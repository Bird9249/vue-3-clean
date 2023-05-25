import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import './presenters/assets/main.css'
import '/node_modules/primeflex/primeflex.css'

import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import { createApp } from 'vue'

import App from './App.ts'
import {
  labelUseCase,
  labelUseCaseKey,
  taskUseCase,
  taskUseCaseKey,
  todoListUseCase,
  todoListUseCaseKey
} from './framework/common/register-use-case.ts'
import router from './presenters/router'

const app = createApp(App)

app.provide(labelUseCaseKey, labelUseCase)
app.provide(taskUseCaseKey, taskUseCase)
app.provide(todoListUseCaseKey, todoListUseCase)

app.use(PrimeVue, { ripple: true })
app.use(createPinia())
app.use(router)
app.use(ToastService)
app.use(ConfirmationService)

app.mount('#app')
