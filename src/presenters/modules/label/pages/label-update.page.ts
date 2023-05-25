import { defineComponent, h, onMounted } from 'vue'
import labelForm from '../components/label.form'
import { useLabel } from '../composables/label'

export const labelUpdatePage = defineComponent(() => {
  const { findOne, update, route, label, loading, error } = useLabel()

  onMounted(async () => {
    const oldData = await findOne(route.params.id as string)
    label.name = oldData.name
    label.color = oldData.color
    loading.value = false
  })

  return () => {
    return !loading.value && !error.value
      ? h(labelForm, {
          id: route.params.id,
          label,
          onSubmitForm: async (e: any) => await update(route.params.id as string, e)
        })
      : loading.value && !error.value
      ? h('div', 'loading...')
      : h('div', error.value)
  }
})
