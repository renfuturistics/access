import { Test, TestingModule } from '@nestjs/testing';
import { CashinSchedule1Service } from './cashin-schedule1.service';

describe('CashinSchedule1Service', () => {
  let service: CashinSchedule1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashinSchedule1Service],
    }).compile();

    service = module.get<CashinSchedule1Service>(CashinSchedule1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
