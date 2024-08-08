import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teams } from '../entities/team.entity';
import { UpdateTeamsDto } from '../dto/update-teams.dto';
import { CreateTeamsDto } from '../dto/create-teams.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Teams)
    private teamsRepository: Repository<Teams>,
  ) {}

  async create(createTeamsDto: CreateTeamsDto): Promise<Teams> {
    const team = this.teamsRepository.create(createTeamsDto);
    return this.teamsRepository.save(team);
  }

  async findAll(): Promise<Teams[]> {
    return this.teamsRepository.find();
  }

  async findOne(id: number): Promise<Teams> {
    return this.teamsRepository.findOneBy({ id });
  }


  async remove(id: string): Promise<void> {
    const result = await this.teamsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
  }

  async update(id: number, updateTeamsDto: UpdateTeamsDto): Promise<Teams> {
    const team = await this.teamsRepository.findOne({ where: { id } });
    if (!team) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    Object.assign(team, updateTeamsDto);
    return this.teamsRepository.save(team);
  }
}
