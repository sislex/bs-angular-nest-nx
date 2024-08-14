import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { LoginService } from './login.service';
import { Login } from '../entities/login.entity';
import { updateLoginDto } from '../dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() creds: {login: string, pass: string}): Promise<boolean> {
    const userList = await this.loginService.findAll();
    const foundUser = userList.find((user) => user.name === creds.login && user.password === creds.pass);
    if (foundUser) {
      return true;
    } else {
      return false;
    }
  }

  @Get()
  async findAll(): Promise<Login[]> {
    return this.loginService.findAll();
  }

  @Put(':id')
  async updateOne(@Body() updateLoginDto: updateLoginDto, @Param('id') id: string) {
    return await this.loginService.update(id, updateLoginDto);
  }
}
