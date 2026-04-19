import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDTO } from './create-item.dto';
import { UpdateItemDTO } from './update-item.dto';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  // GET /items/behave/:behaveId
  @Get('behave/:behaveId')
  async getItemsOfBehave(@Param('behaveId') behaveId: string) {
    return this.itemService.getItemsOfBehave(behaveId);
  }

  // GET /items/:id
  @Get(':id')
  async getItem(@Param('id') id: string) {
    return this.itemService.getItem(id);
  }

  // POST /items
  @Post()
  async createItem(@Body() body: CreateItemDTO) {
    return this.itemService.createItem(body);
  }

  // PUT /items/:id
  @Put(':id')
  async editItem(
    @Param('id') id: string,
    @Body() body: UpdateItemDTO,
  ) {
    return this.itemService.editItem(id, body);
  }

  // DELETE /items/:id
  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return this.itemService.deleteItem(id);
  }
}