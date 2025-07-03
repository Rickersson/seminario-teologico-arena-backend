// src/main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
   app.useGlobalPipes(new ValidationPipe());
  // Permitir requisições do Angular (localhost:4200)
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
