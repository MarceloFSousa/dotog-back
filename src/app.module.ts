import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { BehaveModule } from './behave/behave.module';
import { KeyModule } from './key/key.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ItemModule,
    BehaveModule,
    KeyModule,
  ],
})
export class AppModule {}