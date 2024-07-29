import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Technologies } from '../entities/technologies.entity';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectRepository(Technologies)
    private technologiesRepository: Repository<Technologies>,
  ) {}

  async findAll(): Promise<Technologies[]> {
    return this.technologiesRepository.find();
  }
}
