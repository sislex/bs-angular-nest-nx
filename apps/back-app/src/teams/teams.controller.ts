import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { Teams } from '../entities/team.entity';
import { UpdateTeamsDto } from '../dto/update-teams.dto';
import { CreateTeamsDto } from '../dto/create-teams.dto';
import { AuthGuard } from '../login/jwt-auth.guard';

@UseGuards(AuthGuard)
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async create(@Body() createTeamsDto: CreateTeamsDto): Promise<Teams> {
    return this.teamsService.create(createTeamsDto);
  }

  @Get()
  async findAll(): Promise<Teams[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Teams> {
    return this.teamsService.findOne(+id);
  }

  @Put(':id')
  async updateTeam(@Param('id') id: any, @Body() updateTeamsDto: UpdateTeamsDto): Promise<Teams> {
    return this.teamsService.update(+id, updateTeamsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.teamsService.remove(id);
  }
}
