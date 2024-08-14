import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Requests } from '../entities/request.entity';
import { CreateRequestDto } from '../dto/create-request.dto';
import { updateRequestsDto } from '@back-app/dto/update-requests.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Requests)
    private requestsRepository: Repository<Requests>,
  ) {}

  async findAll(): Promise<Requests[]> {
    return this.requestsRepository.find();
  }

  create(createRequestDto: CreateRequestDto): Promise<Requests> {
    const requests = this.requestsRepository.create(createRequestDto);
    return this.requestsRepository.save(requests);
  }

  async remove(id: string): Promise<void> {
    const result = await this.requestsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }
  }

  async update(id: number, updateRequestsDto: updateRequestsDto): Promise<Requests> {
    const requests = await this.requestsRepository.findOne({ where: { id } });
    if (!requests) {
      throw new NotFoundException(`Team with ID ${id} not found`);
    }

    Object.assign(requests, updateRequestsDto);
    return this.requestsRepository.save(requests);
  }
}
