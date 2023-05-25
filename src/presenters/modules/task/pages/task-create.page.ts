import { defineComponent, h } from 'vue'
import TaskForm from '../components/task.form'
import { useTask } from '../composables/task'

export const taskCreatePage = defineComponent(() => {
  const { create, form } = useTask()

  return () => {
    return h(TaskForm, {
      id: null,
      form,
      onSubmitForm: create
    })
  }
})
