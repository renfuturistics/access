import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssertDailyReport } from './assertDailyReport.type';
import { tbl_AssertDailyReports } from './assert-daily-report.entity';
@Injectable()
export class AssertDailyReportService {
  constructor(
    @InjectRepository(tbl_AssertDailyReports)
    private repository: Repository<tbl_AssertDailyReports>,
  ) {}

  async createDailyReports(dailyReports: AssertDailyReport) {
    const newDailyReports = this.repository.create({ ...dailyReports });
    return this.repository.save(newDailyReports);
  }
}
