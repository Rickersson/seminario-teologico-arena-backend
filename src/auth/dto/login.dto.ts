//src/auth/dto/login.dto

import { IsEmail, IsString } from "class-validator";

export class LoginDto {
  
  @IsEmail()
  email: string;

  @IsString()
  senha: string;
}