//src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { EbooksModule } from './ebooks/ebooks.module';
import { AulasGravadasModule } from './aulas-gravadas/aulas-gravadas.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { NodemailerService } from './nodemailer/nodemailer.service';
import { NodemailerModule } from './nodemailer/nodemailer.module';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb+srv://henriquesenacnig:41323597@seminarioarena.ibctzxd.mongodb.net/?retryWrites=true&w=majority&appName=SeminarioArena'), // Conexão com MongoDB
    AlunosModule, ProfessoresModule, EbooksModule, AulasGravadasModule, AuthModule, NodemailerModule,
  ],
  providers: [NodemailerService],
})
export class AppModule {}