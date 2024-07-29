import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Requests } from '../entities/request.entity';
import { CreateRequestDto } from '../dto/create-request.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Requests)
    private requestsRepository: Repository<Requests>,
  ) {}

  create(createRequestDto: CreateRequestDto): Promise<Requests> {
    const requests = this.requestsRepository.create(createRequestDto);
    return this.requestsRepository.save(requests);
  }
}
