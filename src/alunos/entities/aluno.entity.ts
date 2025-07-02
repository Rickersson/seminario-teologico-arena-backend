// src/alunos/entities/aluno.entity.ts
import { AuthUser } from 'src/auth/interfaces/auth-user.interface';
import { Module } from '../enums/module.enum';
import { Schema } from '@nestjs/mongoose';

@Schema({
  toJSON: {
    virtuals: false, 
    versionKey: false 
}})

export class Aluno implements AuthUser {
  _id: string;
  nome: string;
  cpf: string;
  telefone: string;
  birthdate: Date;
  email: string;
  modulo: Module;
  notaGeral: number;
  notaQuiz: number;
  pagamento: boolean;
  senha: string;
  role: 'aluno' | 'professor';
}