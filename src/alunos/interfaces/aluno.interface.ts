import { Module } from "../enums/module.enum";

// src/alunos/interfaces/aluno.interface.ts
export interface IAluno {
 
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  modulo: Module;
  notaGeral: number;
  notaQuiz: number;
  pagamento: boolean;
  senha: string; 
}