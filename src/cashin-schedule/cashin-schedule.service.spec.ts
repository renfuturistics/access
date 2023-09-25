import { Test, TestingModule } from '@nestjs/testing';
import { CashinScheduleService } from './cashin-schedule.service';

describe('CashinScheduleService', () => {
  let service: CashinScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashinScheduleService],
    }).compile();

    service = module.get<CashinScheduleService>(CashinScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
