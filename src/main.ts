// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

export async function createNestServer(module: any) {
  const expressApp = express();
  const app = await NestFactory.create(module, new ExpressAdapter(expressApp));
  app.enableCors(); 
  await app.init();
  return expressApp;
}
