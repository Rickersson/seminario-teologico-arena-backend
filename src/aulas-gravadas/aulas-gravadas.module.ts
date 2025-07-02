// src/aulas-gravadas/aulas-gravadas.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AulasGravadasController } from './aulas-gravadas.controller';
import { AulasGravadasService } from './aulas-gravadas.service';
import { AulaGravadaSchema } from './models/aula-gravada.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AulaGravada', schema: AulaGravadaSchema },
    ]),
  ],
  controllers: [AulasGravadasController],
  providers: [AulasGravadasService],
})
export class AulasGravadasModule {}