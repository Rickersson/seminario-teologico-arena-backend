import { Schema } from "@nestjs/mongoose";
import { AuthUser } from "src/auth/interfaces/auth-user.interface";

@Schema({
  toJSON: {
    virtuals: false, 
    versionKey: false 
}})

export class Professor implements AuthUser {
  _id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
  role: 'aluno' | 'professor';
}