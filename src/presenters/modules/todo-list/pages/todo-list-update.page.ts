import { defineComponent, h, onMounted } from 'vue'
import { useTodoList } from '..'
import todoListForm from '../components/todo-list.form'

export const todoListUpdatePage = defineComponent(() => {
  const { findOne, update, route, form, loading, error } = useTodoList()

  onMounted(async () => {
    const oldData = await findOne(route.params.id as string)
    form.title = oldData.title
    form.task = oldData.task
    form.status = oldData.status
    loading.value = false
  })

  return () => {
    return !loading.value && !error.value
      ? h(todoListForm, {
          id: route.params.id,
          form,
          onSubmitForm: async (e: any) => await update(route.params.id as string, e)
        })
      : loading.value && !error.value
      ? h('div', 'loading...')
      : h('div', error.value)
  }
})
