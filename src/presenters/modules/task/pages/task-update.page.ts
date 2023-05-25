import { defineComponent, h, onMounted } from 'vue'
import TaskForm from '../components/task.form'
import { useTask } from '../composables/task'

export const taskUpdatePage = defineComponent(() => {
  const { findOne, update, route, form, loading, error } = useTask()

  onMounted(async () => {
    const oldData = await findOne(route.params.id as string)
    form.title = oldData.title
    form.issueDate = oldData.issueDate
    form.duoDate = oldData.duoDate
    form.label = oldData.label
    loading.value = false
  })

  return () => {
    return !loading.value && !error.value
      ? h(TaskForm, {
          id: route.params.id,
          form,
          onSubmitForm: async (e: any) => await update(route.params.id as string, e)
        })
      : loading.value && !error.value
      ? h('div', 'loading...')
      : h('div', error.value)
  }
})
