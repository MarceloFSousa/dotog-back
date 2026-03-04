import { Controller, Get } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from 'src/models/item';

@Controller("items")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getItems(): Item[] {
    return this.itemService.getItems();
  }
}
