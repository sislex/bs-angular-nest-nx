import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { Requests } from '../entities/request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Requests])],
  controllers: [RequestsController],
  providers: [RequestsService],
})
export class RequestsModule {}
