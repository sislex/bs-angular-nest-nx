import { Logger } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import cookieParser from 'cookie-parser';
import { JwtInterceptor } from './jwt.interceptor';
import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };

  app.use(cookieParser());

  const reflector = app.get(Reflector);

  app.useGlobalInterceptors(new JwtInterceptor(new JwtService({ secret: 'My-secret' }), reflector));

  app.enableCors(corsOptions);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );
}

bootstrap();
