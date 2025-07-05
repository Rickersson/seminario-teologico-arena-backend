// src/aulas-gravadas/entities/aula-gravada.entity.ts

import { Module } from '../enums/module.enum';
import { IAulaGravada } from '../interfaces/aula-gravada.interface';

export class AulaGravada implements IAulaGravada {
 
  nome: string;
  descricao: string;
  link: string;
  modulo: Module;
  autor: string;
  categoria: string;
  createdAt: Date;
  updatedAt: Date;

}
