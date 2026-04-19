import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Behave } from './behave/behave.entity';
import { URL } from 'url';
import * as dotenv from 'dotenv';
import { Item } from './item/item.entity';
import { Key } from './key/key.entity';

dotenv.config();

const dbUrl = new URL(process.env.DATABASE_URL || '');

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL || '',
  entities: [Behave,Item,Key],
  synchronize: true,
  ssl: { rejectUnauthorized: false } 
};

export default config;