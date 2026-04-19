import { BehaveResponseDTO } from "src/behave/behave-response.dto"

export class KeyResponseDTO {
    id: string
    behaves?: BehaveResponseDTO[]
}