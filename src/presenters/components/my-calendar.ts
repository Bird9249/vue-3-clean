import Calendar from 'primevue/calendar'
import { useField } from 'vee-validate'
import { defineComponent, h, toRef } from 'vue'

export const MyCalendar = defineComponent(
  (props) => {
    const name = toRef(props, 'name')

    const {
      value: inputValue,
      errorMessage,
      handleChange
    } = useField(name, undefined, {
      initialValue: props.value
    })

    return () => {
      return h('div', { class: 'flex flex-column gap-2 mb-2' }, [
        h('label', { for: name.value }, props.label),
        h(Calendar, {
          name: name.value,
          id: name.value,
          placeholder: props.placeholder,
          modelValue: inputValue.value,
          'onUpdate:modelValue': handleChange,
          ariaDescribedby: `date-error-${name.value}`,
          class: errorMessage.value ? 'p-invalid' : ''
        }),
        h('small', { class: 'p-error', id: `date-error-${name.value}` }, errorMessage.value)
      ])
    }
  },
  {
    props: {
      value: Date,
      name: String,
      label: String,
      placeholder: String
    }
  }
)
