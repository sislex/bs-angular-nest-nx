import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Technologies } from '../entities/technologies.entity';
import { Login } from '../entities/login.entity';
import { updateTechnologiesDto } from '../dto/update-technologies.dto';
import { Teams } from '../entities/team.entity';
import { createTechnologiesDto } from '../dto/create-technologies.dto';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectRepository(Technologies)
    private technologiesRepository: Repository<Technologies>,
  ) {}

  async create(createTechnologiesDto: createTechnologiesDto): Promise<Teams> {
    const newTeam = this.technologiesRepository.create(createTechnologiesDto);
    return this.technologiesRepository.save(newTeam);
  }

  async findAll(): Promise<Technologies[]> {
    return this.technologiesRepository.find();
  }

  async update(id: any, updateTechnologiesDto: updateTechnologiesDto): Promise<Login> {
    await this.technologiesRepository.update(id, updateTechnologiesDto);
    return this.technologiesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const result = await this.technologiesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
  }
}
