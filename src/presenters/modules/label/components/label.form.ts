import { LabelSchema } from '@/core'
import { MyColorPicker, MyInputText } from '@/presenters/components'
import Button from 'primevue/button'
import { Form } from 'vee-validate'
import { defineComponent, h } from 'vue'
import { useLabel } from '../composables/label'

const labelForm = defineComponent(
  (props, { emit }) => {
    const { router } = useLabel()

    return () =>
      h(
        Form,
        {
          onSubmit: (event) => {
            emit('submitForm', event)
          },
          validationSchema: LabelSchema,
          class: 'flex flex-column align-items-center gap-2'
        },
        {
          default: () => [
            h('h2', props.id ? 'Update' : 'Create'),
            h('div', { class: 'flex align-items-center' }, [
              h(MyInputText, {
                name: 'name',
                placeholder: 'enter name',
                label: 'Name',
                value: props.label.name,
                class: 'mr-3'
              }),
              h(MyColorPicker, {
                name: 'color',
                label: 'Color',
                value: props.label.color
              })
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
  { props: ['id', 'label'] }
)

export default labelForm
