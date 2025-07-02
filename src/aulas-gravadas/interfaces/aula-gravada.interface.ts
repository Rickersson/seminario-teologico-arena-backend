import { Module } from "../enums/module.enum";

// src/aulas-gravadas/interfaces/aula-gravada.interface.ts
export interface IAulaGravada {

  nome: string;
  descricao: string;
  link: string;
  modulo: Module;
  autor: String;
  categoria: String;
  createdAt: Date;
  updatedAt: Date;
   quizLink:string;
}