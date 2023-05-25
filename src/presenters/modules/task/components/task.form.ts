import { TaskSchema } from '@/core'
import { MyInputText } from '@/presenters/components'
import { MyCalendar } from '@/presenters/components/my-calendar'
import { MyDropdown } from '@/presenters/components/my-dropdown'
import Button from 'primevue/button'
import { Form } from 'vee-validate'
import { defineComponent, h, onMounted } from 'vue'
import { useLabel } from '../../label/composables/label'
import { useTask } from '../composables/task'

const TaskForm = defineComponent(
  (props, { emit }) => {
    const { router } = useTask()
    const { findAll, labels, loading } = useLabel()

    onMounted(() => {
      findAll()
    })

    return () =>
      h(
        Form,
        {
          onSubmit: (event) => {
            emit('submitForm', event)
          },
          validationSchema: TaskSchema,
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
                  name: 'label',
                  label: 'Label',
                  placeholder: 'select label',
                  value: props.form.label,
                  optionLabel: 'name',
                  optionValue: 'id',
                  options: labels.value,
                  loading: loading.value
                })
              ]),
              h('div', { class: 'col-6' }, [
                h(MyCalendar, {
                  name: 'issueDate',
                  label: 'Issue Date',
                  placeholder: 'enter issue date',
                  value: props.form.issueDate
                }),
                h(MyCalendar, {
                  name: 'duoDate',
                  label: 'Duo Date',
                  placeholder: 'enter duo date',
                  value: props.form.duoDate
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

export default TaskForm
