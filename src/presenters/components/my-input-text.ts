import InputText from 'primevue/inputtext'
import { useField } from 'vee-validate'
import { defineComponent, h, toRef } from 'vue'

export const MyInputText = defineComponent(
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
        h(InputText, {
          name: name.value,
          id: name.value,
          placeholder: props.placeholder,
          value: inputValue.value,
          'onUpdate:modelValue': handleChange,
          ariaDescribedby: `text-error-${name.value}`,
          class: errorMessage.value ? 'p-invalid' : ''
        }),
        h('small', { class: 'p-error', id: `text-error-${name.value}` }, errorMessage.value)
      ])
    }
  },
  {
    props: {
      value: String,
      name: String,
      label: String,
      placeholder: String
    }
  }
)
