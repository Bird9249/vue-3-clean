import { Label, type LabelDto } from '@/core'

export class LabelFactory {
  createNewData(body: LabelDto) {
    const newData = new Label()
    newData.name = body.name
    newData.color = body.color

    return newData
  }

  updateData(body: LabelDto) {
    const newData = new Label()
    newData.name = body.name
    newData.color = body.color

    return newData
  }
}
