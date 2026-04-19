import { Module } from "@nestjs/common";
import { BehaveController } from "./behave.controller";
import { BehaveService } from "./behave.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Behave } from "./behave.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Behave])],
  controllers: [BehaveController],
  providers: [BehaveService],
})
export class BehaveModule {}
