import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { Technologies } from '../entities/technologies.entity';
import { updateTechnologiesDto } from '../dto/update-technologies.dto';
import { Teams } from '../entities/team.entity';
import { createTechnologiesDto } from '../dto/create-technologies.dto';


@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Post()
  async create(@Body() createTechnologiesDto: createTechnologiesDto): Promise<Teams> {
    return this.technologiesService.create(createTechnologiesDto);
  }

  @Get()
  async findAll(): Promise<Technologies[]> {
    return this.technologiesService.findAll();
  }

  @Put(':id')
  async updateOne(@Body() updateTechnologiesDto: updateTechnologiesDto, @Param('id') id: string) {
    return await this.technologiesService.update(id, updateTechnologiesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technologiesService.remove(id);
  }
}
