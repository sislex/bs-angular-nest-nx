import { Controller, Post, Body, HttpCode, HttpStatus, Get, Delete, Param, Put } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from '../dto/create-request.dto';
import { Requests } from '../entities/request.entity';
import { Teams } from '../entities/team.entity';
import { updateRequestsDto } from '../dto/update-requests.dto';
import { UseJwtInterceptor } from '../decorators';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get()
  @UseJwtInterceptor()
  async findAll(): Promise<Requests[]> {
    return this.requestsService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createRequestDto: CreateRequestDto): Promise<Requests> {
    const createdRequest = await this.requestsService.create(createRequestDto);
    return createdRequest;
  }

  @Delete(':id')
  @UseJwtInterceptor()
  async remove(@Param('id') id: string): Promise<void> {
    return this.requestsService.remove(id);
  }

  @Put(':id')
  @UseJwtInterceptor()
  async updateRequests(@Param('id') id: any, @Body() updateRequestsDto: updateRequestsDto): Promise<Teams> {
    return this.requestsService.update(+id, updateRequestsDto);
  }

}
