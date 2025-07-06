import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

export async function createNestServer(module: any) {
  const server = express();
  const app = await NestFactory.create(module, new ExpressAdapter(server));
  app.enableCors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
});
  await app.init();
  return server;
}
