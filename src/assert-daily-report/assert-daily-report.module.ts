import { Module } from '@nestjs/common';
import { AssertDailyReportController } from './assert-daily-report.controller';
import { AssertDailyReportService } from './assert-daily-report.service';

@Module({
  controllers: [AssertDailyReportController],
  providers: [AssertDailyReportService]
})
export class AssertDailyReportModule {}
