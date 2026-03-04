import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { BehaveModule } from './behave/behave.module';

@Module({
  imports: [ItemModule,BehaveModule],
})
export class AppModule {}
