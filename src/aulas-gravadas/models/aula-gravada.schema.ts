// src/aulas-gravadas/models/aula-gravada.schema.ts
import { Schema } from 'mongoose';
import { Module } from '../enums/module.enum';

export const AulaGravadaSchema = new Schema({
 
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: false,
  }, 
  link: {
    type: String,
    required: true,
  },
   modulo: {
    type: String,
    required: true,
    enum: Object.values(Module),
   default: Module.MODULE_I
  },
  autor: {
    type:String,
    required: true
  }, 
  categoria: {
     type:String,
    required: true
  }
}, {
  timestamps: true, // Adiciona createdAt e updatedAt automaticamente
});