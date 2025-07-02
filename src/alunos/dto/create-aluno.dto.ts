import { IsString, IsEmail} from 'class-validator';

export class CreateAlunoDto {
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

  @IsString()
  birthdate: string;
}