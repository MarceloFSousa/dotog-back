import { Module } from "@nestjs/common";
import { KeyController } from "./key.controller";
import { KeyService } from "./key.service";
import { Key } from "./key.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Key])],
  controllers: [KeyController],
  providers: [KeyService],
})
export class KeyModule {}
