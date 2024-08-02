import { Controller, Post, Body, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from '../dto/create-request.dto';
import { Requests } from '../entities/request.entity';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get()
  async findAll(): Promise<Requests[]> {
    return this.requestsService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createRequestDto: CreateRequestDto): Promise<Requests> {
    const createdRequest = await this.requestsService.create(createRequestDto);
    return createdRequest;
  }

}
