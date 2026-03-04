import { Injectable } from "@nestjs/common";
import { mockBehaves } from "src/constants/mocks";

@Injectable()
export class BehaveService{
    getBehaves(){
        return mockBehaves
    }
}