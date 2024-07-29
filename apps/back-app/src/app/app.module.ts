import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Requests } from '../entities/request.entity';
import { RequestsModule } from '../requests/requests.module';
import { TeamsModule } from '../team/teams.module';
import { Teams } from '../entities/team.entity';
import { Technologies } from '../entities/technologies.entity';
import { TechnologiesModule } from '../technologies/technologies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE_NAME || 'best_solutions_db',
      entities: [Requests, Teams, Technologies],
      synchronize: true,
    }),
    RequestsModule,
    TeamsModule,
    TechnologiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
