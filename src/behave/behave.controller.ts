import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Headers,
  Body,
} from '@nestjs/common';
import { BehaveService } from './behave.service';
import { CreateBehaveDTO } from './create-behave.dto';
import { UpdateBehaveDTO } from './update-behave.dto';

@Controller('behaves')
export class BehaveController {
  constructor(private readonly behaveService: BehaveService) {}

  // POST /behaves
  @Post()
  async create(@Body() body: CreateBehaveDTO, @Headers("x-key-id") keyId: string) {
console.log(`key-id:${keyId} | body:`, body);    return this.behaveService.create(body,keyId);
  }

  // GET /behaves/key/:keyId
  @Get('key/:keyId')
  async findAllByKey(@Param('keyId') keyId: string) {
    return this.behaveService.findAllByKey(keyId);
  }

  // GET /behaves/:id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.behaveService.findOne(id);
  }

  // PUT /behaves/:id
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateBehaveDTO,
    @Headers("x-key-id") keyId: string
  ) {
    return this.behaveService.update(id, body, keyId);
  }

  // DELETE /behaves/:id
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.behaveService.remove(id);
    return { message: 'Behave removido com sucesso' };
  }
}