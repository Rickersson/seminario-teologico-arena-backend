import { Module } from "src/alunos/enums/module.enum";

export interface AuthUser {
  _id: string;
  email: string;
   role: 'aluno' | 'professor';

  // Campos opcionais
  nome?: string;
  cpf?: string;
  telefone?: string;
  modulo?: Module;
  notaGeral?: number;
  notaQuiz?: number;
  pagamento?: boolean;
  birthdate?: Date;
  // Senha é usada apenas durante autenticação
  senha?: string;
}