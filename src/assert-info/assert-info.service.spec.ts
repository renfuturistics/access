import { Test, TestingModule } from '@nestjs/testing';
import { AssertInfoService } from './assert-info.service';

describe('AssertInfoService', () => {
  let service: AssertInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssertInfoService],
    }).compile();

    service = module.get<AssertInfoService>(AssertInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
