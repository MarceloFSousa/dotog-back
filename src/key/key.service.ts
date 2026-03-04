import { Injectable } from "@nestjs/common";
import { mockKeys } from "src/constants/mocks";

@Injectable()
export class KeyService{
    getKeys(){
        return mockKeys
    }
}