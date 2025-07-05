// src/ebooks/entities/ebook.entity.ts

import { Schema } from '@nestjs/mongoose';
import { Module } from '../enums/module.enum';
import { IEbook } from '../interfaces/ebook.interface';

@Schema({
  toJSON: {
    virtuals: false, 
    versionKey: false 
}})

export class Ebook implements IEbook {

  nome: string;
  content: string;
  descricao: string;
  modulo: Module;
  autor: string;
  categoria: string;
  createdAt: Date;
  updatedAt: Date;
  quizLink: string;
}