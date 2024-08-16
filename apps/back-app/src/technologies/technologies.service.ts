import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Technologies } from '../entities/technologies.entity';
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

  async findOne(id: number): Promise<Technologies> {
    return this.technologiesRepository.findOneBy({ id });
  }

  async update(id: number, updateTechnologiesDto: updateTechnologiesDto): Promise<Technologies> {
    const technologies = await this.technologiesRepository.findOne({ where: { id } });
    if (!technologies) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    Object.assign(technologies, updateTechnologiesDto);
    return this.technologiesRepository.save(technologies);
  }

  async remove(id: string): Promise<void> {
    const result = await this.technologiesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
  }
}
