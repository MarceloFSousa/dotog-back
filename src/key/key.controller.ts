import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { KeyService } from './key.service';
import { Key } from './key.entity';
import  type { UseKeyDTO } from './use-key.dto';
import { KeyResponseDTO } from './key-response.dto';

@Controller("keys")
export class KeyController {
  constructor(private readonly keyService: KeyService) {}

  @Get()
  async getAllKeys(): Promise<KeyResponseDTO[]> {
    return await this.keyService.getAllKeys();
  }

  @Get(':id')
  async getKey(@Param('id') id: string): Promise<KeyResponseDTO|null> {
    return await this.keyService.getKeyById(id);
  }

  @Post()
  async useKey(@Body() keyDto: UseKeyDTO): Promise<KeyResponseDTO> {
    return await this.keyService.useKey(keyDto);
  }
}