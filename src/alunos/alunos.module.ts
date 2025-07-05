// src/aluno/aluno.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
import { AlunoSchema } from './models/aluno.schema';
import { NodemailerService } from 'src/nodemailer/nodemailer.service';
import { NodemailerModule } from 'src/nodemailer/nodemailer.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Aluno', schema: AlunoSchema }
    ]), NodemailerModule
  ],
  controllers: [AlunosController],
  providers: [AlunosService,],
   exports: [AlunosService]
})
export class AlunosModule {}