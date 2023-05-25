import ColorPicker from 'primevue/colorpicker'
import { useField } from 'vee-validate'
import { defineComponent, h, toRef } from 'vue'

export const MyColorPicker = defineComponent(
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
        h(ColorPicker, {
          name: name.value,
          id: name.value,
          modelValue: inputValue.value,
          'onUpdate:modelValue': handleChange,
          ariaDescribedby: `cp-error-${name.value}`,
          class: errorMessage.value ? 'p-invalid' : ''
        }),
        h('small', { class: 'p-error', id: `cp-error-${name.value}` }, errorMessage.value)
      ])
    }
  },
  {
    props: {
      value: String,
      name: String,
      label: String
    }
  }
)
