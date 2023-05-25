import { TodoListSchema } from '@/core'
import { MyInputText } from '@/presenters/components'
import { MyDropdown } from '@/presenters/components/my-dropdown'
import Button from 'primevue/button'
import { Form } from 'vee-validate'
import { defineComponent, h, onMounted } from 'vue'
import { useTodoList } from '..'
import { useTask } from '../../task/composables/task'

const todoListForm = defineComponent(
  (props, { emit }) => {
    const { router } = useTodoList()
    const { findAll, tasks, loading } = useTask()

    onMounted(() => {
      findAll()
    })

    const status = [{ name: 'todo' }, { name: 'doing' }, { name: 'done' }]

    return () =>
      h(
        Form,
        {
          onSubmit: (event) => {
            emit('submitForm', event)
          },
          validationSchema: TodoListSchema,
          class: 'flex flex-column align-items-center gap-2'
        },
        {
          default: () => [
            h('h2', props.id ? 'Update' : 'Create'),
            h('div', { class: 'grid' }, [
              h('div', { class: 'col-6' }, [
                h(MyInputText, {
                  name: 'title',
                  placeholder: 'enter title',
                  label: 'Title',
                  value: props.form.title,
                  class: 'mr-3'
                }),
                h(MyDropdown, {
                  name: 'task',
                  label: 'Task',
                  optionLabel: 'title',
                  optionValue: 'id',
                  placeholder: 'select task',
                  value: props.form.task,
                  options: tasks.value,
                  loading: loading.value
                })
              ]),
              h('div', { class: 'col-6' }, [
                h(MyDropdown, {
                  name: 'status',
                  label: 'Status',
                  placeholder: 'select status',
                  optionLabel: 'name',
                  optionValue: 'name',
                  value: props.form.status,
                  options: status,
                  loading: loading.value
                })
              ])
            ]),
            h('div', { class: 'flex' }, [
              h(Button, {
                label: 'Cancel',
                severity: 'secondary',
                class: 'mr-3',
                onClick: () => router.back()
              }),
              h(Button, { label: 'Submit', type: 'submit', severity: 'success' })
            ])
          ]
        }
      )
  },
  { props: ['id', 'form'] }
)

export default todoListForm
