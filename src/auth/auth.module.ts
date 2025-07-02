//src/auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AlunosModule } from '../alunos/alunos.module';
import { ProfessoresModule } from '../professores/professores.module';
import { AuthController } from './auth.controller';
import { BlacklistService } from './blacklist.service';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(),
    AlunosModule,
    ProfessoresModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || '040d24c1296bd1ae047159aa55fe072edaf31670bd6efeb8a9ce7de0b4ff9fc735bfb6beeb36de7ac37949b388e48b7bef16378c9f56f75ab1a5dfaec4619b8b',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService,  BlacklistService, JwtStrategy],
  exports: [AuthService, BlacklistService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

