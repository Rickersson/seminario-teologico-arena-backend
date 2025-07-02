import { Module } from "../enums/module.enum";
// src/ebooks/interfaces/ebook.interface.ts
export interface IEbook {
  
  nome: string;
  content: string;
  descricao: string
  modulo: Module;
  autor: string;
  categoria: string;
  createdAt: Date;
  updatedAt: Date;
}