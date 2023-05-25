import type { Label, LabelDto } from '@/core'
import { labelUseCaseKey } from '@/framework/common'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { inject, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export function useLabel() {
  const router = useRouter()
  const route = useRoute()
  const toast = useToast()
  const confirm = useConfirm()
  const useCase = inject(labelUseCaseKey)

  const labels = ref<Label[]>([])
  const label = reactive<LabelDto>({ name: '', color: '' })
  const loading = ref<boolean>(false)
  const error = ref<string>()

  async function create(e: LabelDto): Promise<void> {
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
      labels.value = response.data as Label[]
    } else {
      error.value = response?.message
    }

    loading.value = false
  }

  async function findOne(id: string): Promise<LabelDto> {
    loading.value = true

    const response = await useCase?.findOne(id)

    if (response?.status === 200) {
      return {
        name: response.data?.name as string,
        color: response.data?.color as string
      }
    } else {
      error.value = response?.message
      return {
        name: '',
        color: ''
      }
    }
  }

  async function update(id: string, e: LabelDto): Promise<void> {
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
    label,
    labels,
    create,
    findAll,
    findOne,
    update,
    remove,
    loading,
    error
  }
}
