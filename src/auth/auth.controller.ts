//src/auth/auth.controller.ts

import { Controller, Post, Body, UnauthorizedException, HttpCode, HttpStatus, Req, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { BlacklistService } from './blacklist.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly blacklistService: BlacklistService) {}

@Post('login')
async login(@Body() loginDto: LoginDto) {
  const user = await this.authService.validateUser(loginDto.email, loginDto.senha);
  if (!user) {
    throw new HttpException(
      { message: 'Credenciais inválidas' },
      HttpStatus.UNAUTHORIZED
    );
  }
  return this.authService.login(user);
}
   @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Req() request: Request) {
    const token = request.headers['authorization']?.split(' ')[1];
    if (token) {
      this.blacklistService.addToken(token);
    }
    return { message: 'Logout realizado com sucesso' };
  }
}