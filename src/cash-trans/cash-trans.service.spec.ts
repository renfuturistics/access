import { Test, TestingModule } from '@nestjs/testing';
import { CashTransService } from './cash-trans.service';

describe('CashTransService', () => {
  let service: CashTransService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashTransService],
    }).compile();

    service = module.get<CashTransService>(CashTransService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
