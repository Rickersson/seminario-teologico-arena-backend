//src/ebooks/dto/create-ebook.dto.ts

import { IsEnum, IsString, IsUrl } from 'class-validator';
import { Module } from '../enums/module.enum';

export class CreateEbookDto {

  @IsString()
  nome: string;



  @IsString()
  descricao: string;

  @IsEnum(Module)
   modulo: Module

   @IsString()
   autor:String

   @IsString()
   categoria: String
 
   @IsString()
   @IsUrl()
   quizLink: string;
}