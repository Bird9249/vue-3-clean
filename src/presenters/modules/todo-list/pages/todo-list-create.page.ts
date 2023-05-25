import { defineComponent, h } from 'vue'
import { useTodoList } from '..'
import todoListForm from '../components/todo-list.form'

export const todoListCreatePage = defineComponent(() => {
  const { create, form } = useTodoList()

  return () => {
    return h(todoListForm, {
      id: null,
      form,
      onSubmitForm: create
    })
  }
})
