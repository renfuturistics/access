import { Body, Controller, Post } from '@nestjs/common';
import { DriverYangoReportsService } from './driver-yango-reports.service';
import { DriverYangoReportsDto } from './dto/driver-yango-reports.dto';

@Controller('driver-yango-reports')
export class DriverYangoReportsController {
  constructor(private readonly service: DriverYangoReportsService) {}

  @Post()
  async createReport(@Body() dto: DriverYangoReportsDto) {
    return await this.service.createReport(dto);
  }
}
