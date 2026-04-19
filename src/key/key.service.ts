import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Key } from "./key.entity";
import { UseKeyDTO } from "./use-key.dto";
import * as crypto from 'crypto';
import { KeyResponseDTO } from "./key-response.dto";

@Injectable()
export class KeyService {
  constructor(
    @InjectRepository(Key)
    private readonly keyRepo: Repository<Key>, 
  ) {}

  async getAllKeys(): Promise<KeyResponseDTO[]> {
    const keys = await this.keyRepo.find({
      relations: ['behaves'], 
    });

    return keys.map(k => this.toResponseDTO(k));
  }

  async getKeyById(id: string): Promise<KeyResponseDTO | null> {
    const key = await this.keyRepo.findOne({
      where: { id },
      relations: ['behaves'],
    });

    if (!key) return null;

    return this.toResponseDTO(key);
  }

  async useKey(keyDto: UseKeyDTO): Promise<KeyResponseDTO> {
    const hashedInput = crypto
      .createHash('sha256')
      .update(keyDto.key)
      .digest('hex');

    let key = await this.keyRepo.findOne({
      where: { key: hashedInput },
      relations: ['behaves'],
    });

    if (!key) {
      key = this.keyRepo.create({
        key: hashedInput,
      });

      key = await this.keyRepo.save(key);
    }

    return this.toResponseDTO(key);
  }

private toResponseDTO(key: Key): KeyResponseDTO {
  return {
    id: key.id,
    behaves: key.behaves?.map(b => ({
      id: b.id,
      name: b.name,
    })),
  };
}
}