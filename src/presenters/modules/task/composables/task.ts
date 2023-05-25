import { Task, type TaskDto } from '@/core'
import { taskUseCaseKey } from '@/framework/common'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { inject, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useTask() {
  const router = useRouter()
  const route = useRoute()
  const toast = useToast()
  const confirm = useConfirm()
  const useCase = inject(taskUseCaseKey)

  const tasks = ref<Task[]>([])
  const form = reactive<TaskDto>({ title: '', label: null, issueDate: null, duoDate: null })
  const loading = ref<boolean>(false)
  const error = ref<string>()

  async function create(e: TaskDto): Promise<void> {
    loading.value = true
    const created = await useCase?.create(e)

    if (created?.status === 201) {
      toast.add({
        severity: 'success',
        summary: 'Created',
        detail: created.message,
        life: 3000
      })
      router.back()
    } else {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: created?.message,
        life: 3000
      })
    }

    loading.value = false
  }

  async function findAll(): Promise<void> {
    loading.value = true

    const response = await useCase?.findAll()

    if (response?.status === 200) {
      tasks.value = response.data as Task[]
    } else {
      error.value = response?.message
    }

    loading.value = false
  }

  async function findOne(id: string): Promise<TaskDto> {
    loading.value = true

    const response = await useCase?.findOne(id)

    if (response?.status === 200) {
      return {
        title: response.data?.title as string,
        issueDate: new Date(response.data?.issueDate as string),
        duoDate: new Date(response.data?.duoDate as string),
        label: response.data?.label
      }
    } else {
      error.value = response?.message
      return {
        title: '',
        label: null,
        issueDate: null,
        duoDate: null
      }
    }
  }

  async function update(id: string, e: TaskDto): Promise<void> {
    loading.value = true
    const updated = await useCase?.update(id, e)

    if (updated?.status === 200) {
      toast.add({
        severity: 'success',
        summary: 'Updated',
        detail: updated.message,
        life: 3000
      })
      router.back()
    } else {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: updated?.message,
        life: 3000
      })
    }

    loading.value = false
  }

  async function remove(id: string): Promise<void> {
    loading.value = true
    const removed = await useCase?.remove(id)

    if (removed?.status === 200) {
      toast.add({
        severity: 'success',
        summary: 'Removed',
        detail: removed.message,
        life: 3000
      })
      findAll()
    } else {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: removed?.message,
        life: 3000
      })
    }

    loading.value = false
  }

  return {
    router,
    route,
    confirm,
    form,
    tasks,
    create,
    findAll,
    findOne,
    update,
    remove,
    loading,
    error
  }
}
