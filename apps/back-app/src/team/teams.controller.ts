import { Controller, Get } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Teams } from '../entities/team.entity';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  async findAll(): Promise<Teams[]> {
    return this.teamsService.findAll();
  }
}
