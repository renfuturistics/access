import { Module } from '@nestjs/common';
import { AssertDailyReportController } from './assert-daily-report.controller';
import { AssertDailyReportService } from './assert-daily-report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_AssertDailyReports } from './assert-daily-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tbl_AssertDailyReports])],
  controllers: [AssertDailyReportController],
  providers: [AssertDailyReportService],
})
export class AssertDailyReportModule {}
