import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { Teams } from '../entities/team.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Teams])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
