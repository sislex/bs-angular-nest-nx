import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Teams } from '../entities/team.entity';
import { updateTeamsDto } from '../dto/update-teams.dto';
import { createTeamsDto } from '../dto/create-teams.dto';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async create(@Body() createTeamsDto: createTeamsDto): Promise<Teams> {
    return this.teamsService.create(createTeamsDto);
  }

  @Get()
  async findAll(): Promise<Teams[]> {
    return this.teamsService.findAll();
  }

  @Put(':id')
  async updateOne(@Body() updateTeamsDto: updateTeamsDto, @Param('id') id: string) {
    return await this.teamsService.update(id, updateTeamsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamsService.remove(id);
  }
}
