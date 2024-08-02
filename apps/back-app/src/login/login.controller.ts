import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { LoginService } from './login.service';
import { Login } from '../entities/login.entity';
import { updateLoginDto } from '../dto/update-login.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async findAll(): Promise<Login[]> {
    return this.loginService.findAll();
  }

  @Put(':id')
  async updateOne(@Body() updateLoginDto: updateLoginDto, @Param('id') id: string) {
    return await this.loginService.update(id, updateLoginDto);
  }
}
