// src/alunos/models/aluno.schema.ts
import { Schema } from 'mongoose';
import { Module } from '../enums/module.enum';

export const AlunoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },  role: {
    type: String,
    required: true,
    enum: ['aluno', 'professor'], // Restringe aos valores permitidos
    default: 'aluno' // Valor padrão automático
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  modulo: {
    type: String,
    required: true,
    enum: Object.values(Module),
  default: Module.MODULE_0
  },
  notaGeral: {
    type: Number,
    required: true,
    default: 0
  },
  notaQuiz: {
    type: Number,
    required: true,
     default: 0
  },
  pagamento: {
    type: Boolean,
    required: true,
    default: false
  },senha: {
    type: String,
    required: true,
  },birthdate: {
  type: Date,
  required: false 
},
}, {
  timestamps: true,
  versionKey: false, 
  toJSON: {
    virtuals: false, 
    transform: (doc, ret) => {
      delete ret._id;  
      delete ret.senha; 
    }
  },
  id: false 
}
);