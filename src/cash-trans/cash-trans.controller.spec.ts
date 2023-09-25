import { Test, TestingModule } from '@nestjs/testing';
import { CashTransController } from './cash-trans.controller';

describe('CashTransController', () => {
  let controller: CashTransController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashTransController],
    }).compile();

    controller = module.get<CashTransController>(CashTransController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
