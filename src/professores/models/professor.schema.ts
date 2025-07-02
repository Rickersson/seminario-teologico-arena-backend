// src/professores/models/professor.schema.ts
import { Schema } from 'mongoose';

export const ProfessorSchema = new Schema({
 
  nome: {
    type: String,
    required: true,
  },role: { type: String,
    required: true,
    enum: ['aluno', 'professor'], 
    default: 'professor' 
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

  senha:{
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});