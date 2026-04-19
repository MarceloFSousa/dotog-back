import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Behave } from "./behave.entity";
import { CreateBehaveDTO } from "./create-behave.dto";
import { BehaveResponseDTO } from "./behave-response.dto";
import { Key } from "src/key/key.entity";
import { UpdateBehaveDTO } from "./update-behave.dto";

@Injectable()
export class BehaveService {
  constructor(
    @InjectRepository(Behave)
    private readonly behaveRepo: Repository<Behave>,
  ) { }

  async create(createDto: CreateBehaveDTO, keyId : string): Promise<BehaveResponseDTO> {
    const behave = this.behaveRepo.create({
      name: createDto.name,
      key: { id: keyId }
    });
    const savedBehave = await this.behaveRepo.save(behave);
    return this.toResponseDTO(savedBehave);
  }

  async findAllByKey(keyId: string): Promise<BehaveResponseDTO[]> {
  const allBehaves = await this.behaveRepo.find({
    where: { key: { id: keyId } },
    relations: ['key']
  });
    return allBehaves.map((b)=> this.toResponseDTO(b));
  }

  async findOne(id: string): Promise<BehaveResponseDTO> {
    const behave = await this.behaveRepo.findOneBy({ id });
    if (!behave) throw new NotFoundException(`Behave with ID ${id} not found`);
    return this.toResponseDTO(behave);
  }

  async update(id: string, updateDto: UpdateBehaveDTO, keyId: string): Promise<BehaveResponseDTO> {
    const behave = await this.behaveRepo.findOne({
      where: { id },
      relations: ['items', 'key'],
    });

    if (!behave) {
      throw new NotFoundException(`Behave with ID ${id} not found`);
    }

    Object.assign(behave, updateDto);

    if (keyId) {
      behave.key = { id: keyId } as Key;
    }

    const savedBehave = await this.behaveRepo.save(behave);
    return this.toResponseDTO(savedBehave);
  }

  async remove(id: string): Promise<void> {
    const result = await this.behaveRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Behave with ID ${id} not found`);
    }
  }

  private toResponseDTO(behave: Behave): BehaveResponseDTO {
    return {
      id:behave.id,
      name: behave.name,
      items: behave.items?.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        donePercent: item.donePercent,
        datetimeToDo: item.datetimeToDo,
        behaveId: behave.id
      })) || []
    };

  }
}