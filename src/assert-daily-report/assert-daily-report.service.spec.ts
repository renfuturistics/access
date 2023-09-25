import { Test, TestingModule } from '@nestjs/testing';
import { AssertDailyReportService } from './assert-daily-report.service';

describe('AssertDailyReportService', () => {
  let service: AssertDailyReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssertDailyReportService],
    }).compile();

    service = module.get<AssertDailyReportService>(AssertDailyReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
