// src/professores/professores.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessoresController } from './professores.controller';
import { ProfessoresService } from './professores.service';
import { ProfessorSchema } from './models/professor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Professor', schema: ProfessorSchema },
    ]),
  ],
  controllers: [ProfessoresController],
  providers: [ProfessoresService],
  exports: [ProfessoresService]
})
export class ProfessoresModule {}