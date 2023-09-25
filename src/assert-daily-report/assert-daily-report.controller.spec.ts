import { Test, TestingModule } from '@nestjs/testing';
import { AssertDailyReportController } from './assert-daily-report.controller';

describe('AssertDailyReportController', () => {
  let controller: AssertDailyReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssertDailyReportController],
    }).compile();

    controller = module.get<AssertDailyReportController>(AssertDailyReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
