//src/aulas-gravadas/dto/create-aula-gravada.dto.ts

import { IsString, IsOptional, IsUrl, IsEnum} from 'class-validator';
import { Module } from '../enums/module.enum';

export class CreateAulaGravadaDto {

  @IsString()
  nome: string;

  @IsString()
  
  descricao: string;

  @IsString()
  @IsUrl()
  link: string;

  @IsEnum(Module)
   modulo: string;

  @IsString()
  autor: string;

  @IsString()
  categoria: string;

  @IsString()
  @IsUrl()
  quizLink:string;
}