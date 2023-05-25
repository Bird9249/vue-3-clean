import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import { defineComponent, h, onMounted } from 'vue'
import { useTask } from '../composables/task'

export const TaskListPage = defineComponent(() => {
  const { router, tasks, findAll, loading, error, remove, confirm } = useTask()

  onMounted(() => {
    findAll()
  })

  return () => {
    return h('div', { class: 'w-full' }, [
      h('div', { class: 'flex justify-content-between' }, [
        h('h2', 'List Task'),
        h(Button, {
          label: 'Add New',
          onClick: () => {
            router.push({ name: 'task.create' })
          }
        })
      ]),
      h(
        DataTable,
        { value: tasks.value, class: 'mt-3', showGridlines: true, loading: loading.value },
        {
          empty: () =>
            h(
              'div',
              { class: 'flex justify-content-center' },
              error.value ? error.value : 'Empty Data'
            ),
          default: () => [
            h(Column, { field: 'title', header: 'Title' }),
            h(
              Column,
              { field: 'issueDate', header: 'IssueDate' },
              {
                body: (slotProps: any) =>
                  h('div', new Date(slotProps.data.issueDate).toLocaleDateString())
              }
            ),
            h(
              Column,
              { field: 'duoDate', header: 'DuoDate' },
              {
                body: (slotProps: any) =>
                  h('div', new Date(slotProps.data.duoDate).toLocaleDateString())
              }
            ),
            h(Column, { field: 'label', header: 'Label' }),
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
                        router.push({ name: 'task.update', params: { id: slotProps.data.id } })
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
