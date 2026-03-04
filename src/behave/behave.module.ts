import { Module } from "@nestjs/common";
import { BehaveController } from "./behave.controller";
import { BehaveService } from "./behave.service";

@Module({
  imports: [],
  controllers: [BehaveController],
  providers: [BehaveService],
})
export class BehaveModule {}
