import { Test, TestingModule } from '@nestjs/testing';
import { AulasGravadasController } from './aulas-gravadas.controller';
import { AulasGravadasService } from './aulas-gravadas.service';

describe('AulasGravadasController', () => {
  let controller: AulasGravadasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AulasGravadasController],
      providers: [AulasGravadasService],
    }).compile();

    controller = module.get<AulasGravadasController>(AulasGravadasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
