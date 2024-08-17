import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtInterceptor implements NestInterceptor {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector, // Внедрение Reflector
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    // Проверка на наличие декоратора @SkipInterceptor()
    const handler = context.getHandler();
    const skipInterceptor = this.reflector.get<boolean>('skipInterceptor', handler);

    if (skipInterceptor) {
      return next.handle();
    }

    const token = req.cookies['accessToken'];

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      const decoded = this.jwtService.verify(token);
      req.user = decoded; // Сохраняем декодированную информацию в запросе
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        res.clearCookie('accessToken');
        throw new UnauthorizedException('Token expired');
      }
      throw new UnauthorizedException('Invalid token');
    }

    return next.handle();
  }
}
