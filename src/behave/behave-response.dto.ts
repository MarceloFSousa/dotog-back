import { ItemResponseDTO } from "src/item/item-response.dto"
import { Item } from "src/item/item.entity"

export class BehaveResponseDTO {
    id:string
    name:string
    items?:ItemResponseDTO[]
}