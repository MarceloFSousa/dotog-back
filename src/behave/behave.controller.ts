import { Controller, Get } from '@nestjs/common';
import { BehaveService } from './behave.service';
import { Behave } from 'src/models/behave';

@Controller("behaves")
export class BehaveController {
  constructor(private readonly behaveService: BehaveService) {}

  @Get()
  getBehaves(): Behave[] {
    return this.behaveService.getBehaves();
  }
}
