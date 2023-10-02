import { Controller, Body, Post } from '@nestjs/common';
import { AssertDailyReportService } from './assert-daily-report.service';
import { AssertDailyReportDto } from './dto/createAssertDailyReports.dto';

@Controller('assert-daily-report')
export class AssertDailyReportController {
  constructor(private service: AssertDailyReportService) {}
  @Post()
  async createReport(@Body() createAssertDto: AssertDailyReportDto) {
    return await this.service.createDailyReports(createAssertDto);
  }
}
