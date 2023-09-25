import { Test, TestingModule } from '@nestjs/testing';
import { DriverCashinScheduleService } from './driver-cashin-schedule.service';

describe('DriverCashinScheduleService', () => {
  let service: DriverCashinScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverCashinScheduleService],
    }).compile();

    service = module.get<DriverCashinScheduleService>(DriverCashinScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
