//src/auth/blacklist.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class BlacklistService {
  private tokens: Set<string> = new Set();

  addToken(token: string) {
    this.tokens.add(token);
  }

  isBlacklisted(token: string): boolean {
    return this.tokens.has(token);
  }
}