import { Injectable } from "@nestjs/common";
import { mockItems } from "src/constants/mocks";

@Injectable()
export class ItemService{
    getItems(){
        return mockItems
    }
}