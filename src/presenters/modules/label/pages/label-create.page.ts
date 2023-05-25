import { defineComponent, h } from 'vue'
import labelFrom from '../components/label.form'
import { useLabel } from '../composables/label'

export const labelCreatePage = defineComponent(() => {
  const { create, label } = useLabel()

  return () => {
    return h(labelFrom, {
      id: null,
      label,
      onSubmitForm: create
    })
  }
})
