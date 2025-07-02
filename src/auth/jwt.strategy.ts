import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BlacklistService } from './blacklist.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private blacklistService: BlacklistService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET', '040d24c1296bd1ae047159aa55fe072edaf31670bd6efeb8a9ce7de0b4ff9fc735bfb6beeb36de7ac37949b388e48b7bef16378c9f56f75ab1a5dfaec4619b8b'),
    });
  }

 async validate(payload: any) {
  if (this.blacklistService.isBlacklisted(payload)) {
    throw new Error('Token inválido');
  }
  return { sub: payload.sub, email: payload.email, role: payload.role };
}
}