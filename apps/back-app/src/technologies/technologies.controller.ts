import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { Technologies } from '../entities/technologies.entity';
import { updateTechnologiesDto } from '../dto/update-technologies.dto';
import { createTechnologiesDto } from '../dto/create-technologies.dto';
import { UseJwtInterceptor } from '../decorators';

@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Post()
  @UseJwtInterceptor()
  async create(@Body() createTechnologiesDto: createTechnologiesDto): Promise<Technologies> {
    return this.technologiesService.create(createTechnologiesDto);
  }

  @Get()
  async findAll(): Promise<Technologies[]> {
    return this.technologiesService.findAll();
  }

  @Get(':id')
  @UseJwtInterceptor()
  async findOne(@Param('id') id: string): Promise<Technologies> {
    return this.technologiesService.findOne(+id);
  }

  @Put(':id')
  @UseJwtInterceptor()
  async updateOne(@Param('id') id: any, @Body() updateTechnologiesDto: updateTechnologiesDto): Promise<Technologies> {
    return this.technologiesService.update(+id, updateTechnologiesDto);
  }

  @Delete(':id')
  @UseJwtInterceptor()
  remove(@Param('id') id: string) {
    return this.technologiesService.remove(id);
  }
}
