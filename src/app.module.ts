import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { BehaveModule } from './behave/behave.module';
import { KeyModule } from './key/key.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    ItemModule,
    BehaveModule,
    KeyModule,
  ],
})
export class AppModule {}