//src/professores/dto/create-professor.dto.ts

import { IsString, IsEmail } from 'class-validator';

export class CreateProfessorDto {
 

  @IsString()
  nome: string;

  @IsString()
  cpf: string;

  @IsString()
  telefone: string;

  @IsEmail()
  email: string;

  @IsString()
  senha: string;
}