import { Controller, Get } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { Technologies } from '../entities/technologies.entity';


@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Get()
  async findAll(): Promise<Technologies[]> {
    return this.technologiesService.findAll();
  }
}
