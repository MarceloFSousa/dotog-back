import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Item } from "./item.entity";
import { CreateItemDTO } from "./create-item.dto";
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateItemDTO } from "./update-item.dto";
import { ItemResponseDTO } from "./item-response.dto";
import { BadRequestException } from "@nestjs/common";

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepo: Repository<Item>,
  ) {}

  async getItemsOfBehave(behaveId: string) : Promise<ItemResponseDTO[]> {
    const items = await this.itemRepo.find({
      where: { behave: { id: behaveId } },
      relations: ['behave'], // opcional
    });

    return items.map((i) => this.toResponseDTO(i));
  }

  async getItem(id: string) : Promise<ItemResponseDTO> {
    const item = await this.itemRepo.findOne({
      where: { id },
      relations: ['behave'], // opcional
    });

    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }

    return this.toResponseDTO(item);
  }

async createItem(itemDTO: CreateItemDTO): Promise<ItemResponseDTO> {
  
  let date: Date | null = null;

  if (itemDTO.datetimeToDo) {
    const parsed = new Date(itemDTO.datetimeToDo);

    if (isNaN(parsed.getTime())) {
      throw new BadRequestException("datetimeToDo inválido");
    }

    date = parsed;
  }

  const item = this.itemRepo.create({
    ...itemDTO,
    datetimeToDo: date, 
  });

  if (itemDTO.behaveId) {
    item.behave = { id: itemDTO.behaveId } as any;
  }

  const itemSaved = await this.itemRepo.save(item);

  return this.toResponseDTO(itemSaved);
}

async editItem(
  id: string,
  itemDTO: UpdateItemDTO,
): Promise<ItemResponseDTO> {
  const item = await this.itemRepo.findOne({
    where: { id },
    relations: ['behave'],
  });

  if (!item) {
    throw new NotFoundException('Item não encontrado');
  }

  Object.assign(item, itemDTO);

  if (itemDTO.behaveId) {
    item.behave = { id: itemDTO.behaveId } as any;
  }

  const itemEdited = await this.itemRepo.save(item);

  return this.toResponseDTO(itemEdited);
}

  async deleteItem(id: string) : Promise<ItemResponseDTO> {
    const item = await this.itemRepo.findOne({
      where: { id },
      relations: ['behave'], // opcional
    });

    if (!item) {
      throw new NotFoundException('Item não encontrado');
    }
    const itemDeleted = await this.itemRepo.remove(item);
    return this.toResponseDTO(itemDeleted);
  }
  private toResponseDTO(item: Item): ItemResponseDTO {
    return {
      id:item.id,
        donePercent: item.donePercent,
        description: item.description,
        name: item.name,
        datetimeToDo: item.datetimeToDo,
        behaveId: item.behave?.id
    };
  }
}