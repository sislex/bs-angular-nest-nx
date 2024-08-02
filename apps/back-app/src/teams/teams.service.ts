import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teams } from '../entities/team.entity';
import { Login } from '../entities/login.entity';
import { updateTeamsDto } from '../dto/update-teams.dto';
import { createTeamsDto } from '../dto/create-teams.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Teams)
    private teamsRepository: Repository<Teams>,
  ) {}

  async create(createTeamsDto: createTeamsDto): Promise<Teams> {
    const newTeam = this.teamsRepository.create(createTeamsDto);
    return this.teamsRepository.save(newTeam);
  }

  async findAll(): Promise<Teams[]> {
    return this.teamsRepository.find();
  }

  async update(id: any, updateTeamsDto: updateTeamsDto): Promise<Login> {
    await this.teamsRepository.update(id, updateTeamsDto);
    return this.teamsRepository.findOne(id);
  }


  async remove(id: string): Promise<void> {
    const result = await this.teamsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
  }
}
