// src/rbooks/models/ebook.schema.ts

import { Schema } from 'mongoose';
import { Module } from '../enums/module.enum';

export const EbookSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    quizLink: String,
    modulo: {
      type: String,
      required: true,
      enum: Object.values(Module),
      default: 'Módulo I',
    },
    autor: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
  },
);
