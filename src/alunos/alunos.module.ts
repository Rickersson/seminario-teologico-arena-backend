// src/aluno/aluno.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
import { AlunoSchema } from './models/aluno.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Aluno', schema: AlunoSchema }, // Nome da coleção no MongoDB
    ]),
  ],
  controllers: [AlunosController],
  providers: [AlunosService],
   exports: [AlunosService]
})
export class AlunosModule {}