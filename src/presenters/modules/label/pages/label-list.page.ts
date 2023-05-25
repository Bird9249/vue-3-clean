import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { defineComponent, h, onMounted } from 'vue'
import { useLabel } from '../composables/label'

export const labelListPage = defineComponent(() => {
  const { router, labels, findAll, loading, error, remove, confirm } = useLabel()

  onMounted(() => {
    findAll()
  })

  return () => {
    return h('div', { class: 'w-full' }, [
      h('div', { class: 'flex justify-content-between' }, [
        h('h2', 'List Label'),
        h(Button, {
          label: 'Add New',
          onClick: () => {
            router.push({ name: 'label.create' })
          }
        })
      ]),
      h(
        DataTable,
        { value: labels.value, class: 'mt-3', showGridlines: true, loading: loading.value },
        {
          empty: () =>
            h(
              'div',
              { class: 'flex justify-content-center' },
              error.value ? error.value : 'Empty Data'
            ),
          default: () => [
            h(Column, { field: 'name', header: 'Name' }),
            h(
              Column,
              { field: 'color', header: 'Color' },
              {
                body: (slotProps: any) =>
                  h('div', {
                    class: 'w-2rem h-2rem border-round',
                    style: `background-color: #${slotProps.data.color}`
                  })
              }
            ),
            h(
              Column,
              { header: 'Action' },
              {
                body: (slotProps: any) =>
                  h('div', { class: 'flex' }, [
                    h(Button, {
                      class: 'mr-2',
                      severity: 'info',
                      label: 'edit',
                      size: 'small',
                      onClick: () =>
                        router.push({ name: 'label.update', params: { id: slotProps.data.id } })
                    }),
                    h(Button, {
                      severity: 'danger',
                      label: 'remove',
                      size: 'small',
                      onClick: (event: any) => {
                        confirm.require({
                          target: event.currentTarget,
                          message: 'Are you sure you want to removed?',
                          accept() {
                            remove(slotProps.data.id)
                          }
                        })
                      }
                    })
                  ])
              }
            )
          ]
        }
      )
    ])
  }
})
