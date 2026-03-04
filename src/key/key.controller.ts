import { Controller, Get } from '@nestjs/common';
import { KeyService } from './key.service';
import { Key } from 'src/models/key';

@Controller("keys")
export class KeyController {
  constructor(private readonly keyService: KeyService) {}

  @Get()
  getKeys(): Key[] {
    return this.keyService.getKeys();
  }
}
