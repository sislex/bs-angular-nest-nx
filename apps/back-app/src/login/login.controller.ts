import { Body, Controller, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';
import { updateLoginDto } from '../dto/update-login.dto';
import { JwtService } from '@nestjs/jwt';
import { SkipInterceptor } from '../decorators';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  @Post()
  @SkipInterceptor()
  async login(@Body() creds: {login: string, pass: string}, @Req() req: any): Promise<any> {
    const userList = await this.loginService.findAll();
    const foundUser = userList.find((user) => user.name === creds.login && user.password === creds.pass);
    if (foundUser) {
      console.log('Получили куки в NEST', req.cookies)
      const payload = { username: foundUser.name, userpass: foundUser.password };
      return {
        data: true,
        access_token: await this.jwtService.signAsync(payload),
        user: foundUser.name,
      }
    } else {
      return false;
    }
  }

  @Post('logout')
  @SkipInterceptor()
  async logout(@Req() req: any, @Res() res: Response): Promise<any> {
    // Удаляем токен из cookies
    res.clearCookie('accessToken');
    console.log('Токен удален из cookies');

    // Дополнительно можно сделать какие-то действия, если нужно
    res.status(200).send({ message: 'Выход выполнен успешно' });
  }

  @Get('check')
  @SkipInterceptor()
  async updateLogin(@Req() req: any, @Res() res: Response) {
    console.log('МЕТОД ВЫЗВАН');
    const token = req.cookies['accessToken'];

    if (token) {
      try {
        const decoded = await this.jwtService.verifyAsync(token);
        console.log(decoded);

        // Получаем всех пользователей из базы данных
        const userList = await this.loginService.findAll();

        // Ищем пользователя, соответствующего данным из токена
        const foundUser = userList.find(user => user.name === decoded.username && user.password === decoded.userpass);

        if (foundUser) {
          res.send({ success: true, user: foundUser.name });
          console.log('Токен успешно верифицирован');
        } else {
          res.send({ success: false });
          console.log('Пользователь не найден или данные не совпадают');
        }

      } catch (error) {
        console.error('Ошибка при верификации токена:', error);
        res.send({ success: false });
      }
    } else {
      console.log('Токен не найден');
      res.send({ success: false });
    }
  }

  @Put(':id')
  @SkipInterceptor()
  async updateOne(@Body() updateLoginDto: updateLoginDto, @Param('id') id: string) {
    return await this.loginService.update(id, updateLoginDto);
  }
}
