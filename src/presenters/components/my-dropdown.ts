import Dropdown from 'primevue/dropdown'
import { useField } from 'vee-validate'
import { defineComponent, h, toRef } from 'vue'

export const MyDropdown = defineComponent(
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
        h(Dropdown, {
          name: name.value,
          loading: props.loading,
          options: props.options,
          optionLabel: props.optionLabel,
          optionValue: props.optionValue,
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
    props: [
      'value',
      'name',
      'label',
      'placeholder',
      'options',
      'optionLabel',
      'optionValue',
      'loading'
    ]
  }
)
