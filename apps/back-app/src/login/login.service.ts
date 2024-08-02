import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Login } from '../entities/login.entity';
import { updateLoginDto } from '../dto/update-login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private readonly loginRepository: Repository<Login>,
  ) {}

  async findAll(): Promise<Login[]> {
    return this.loginRepository.find();
  }

  async update(id: any, updateLoginDto: updateLoginDto): Promise<Login> {
    await this.loginRepository.update(id, updateLoginDto);
    return this.loginRepository.findOne(id);
  }
}
