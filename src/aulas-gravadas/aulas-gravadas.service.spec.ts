

import { Test, TestingModule } from '@nestjs/testing';
import { AulasGravadasService } from './aulas-gravadas.service';

describe('AulasGravadasService', () => {
  let service: AulasGravadasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AulasGravadasService],
    }).compile();

    service = module.get<AulasGravadasService>(AulasGravadasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
