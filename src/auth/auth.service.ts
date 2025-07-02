//src/auth/auth.service.ts

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AlunosService } from '../alunos/alunos.service';
import { ProfessoresService } from '../professores/professores.service';
import { AuthUser } from './interfaces/auth-user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly alunosService: AlunosService,
    private readonly professoresService: ProfessoresService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<AuthUser | null> {
    let user: AuthUser | null = await this.alunosService.findByEmail(email);
    
    if (!user) {
      user = await this.professoresService.findByEmail(email);
    }

    if (user && user.senha) {
      const isValid = await bcrypt.compare(senha, user.senha);
      if (isValid) {
        const { senha: _, ...result } = user as any;
        return result;
      }
    }

    return null;
  }

  async login(user: AuthUser) {
    const payload = { 
      sub: user._id, 
      email: user.email, 
      role: user.role
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  
}


