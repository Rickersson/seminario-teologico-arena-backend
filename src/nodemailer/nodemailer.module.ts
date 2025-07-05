// src/nodemailer/nodemailer.module.ts
import { Module } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';

@Module({
  providers: [NodemailerService],
  exports: [NodemailerService], // <- Torna disponível para outros módulos
})
export class NodemailerModule {}
