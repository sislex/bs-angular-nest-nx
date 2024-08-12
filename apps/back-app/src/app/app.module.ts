import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Requests } from '../entities/request.entity';
import { RequestsModule } from '../requests/requests.module';
import { TeamsModule } from '../teams/teams.module';
import { Teams } from '../entities/team.entity';
import { Technologies } from '../entities/technologies.entity';
import { TechnologiesModule } from '../technologies/technologies.module';
import { Login } from '../entities/login.entity';
import { LoginModule } from '../login/login.module';
import session from 'express-session';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || 'root',
      database: process.env.DATABASE_NAME || 'best_solutions_db',
      entities: [Requests, Teams, Technologies, Login],
      synchronize: true,
    }),
    RequestsModule,
    TeamsModule,
    TechnologiesModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: 'your-secret-key', // замените на ваш секретный ключ
          resave: false,
          saveUninitialized: false,
          cookie: { secure: false, sameSite: 'none', httpOnly: false}, // выставите true если используете https
        }),
      )
      .forRoutes('*');
  }
}
