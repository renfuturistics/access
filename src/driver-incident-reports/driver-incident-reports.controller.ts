import { Body, Controller, Post } from '@nestjs/common';
import { DriverIncidentReportsService } from './driver-incident-reports.service';
import { DriverIncidentReportsDto } from './dto/driver-incident-reports.dto';

@Controller('driver-incident-reports')
export class DriverIncidentReportsController {
  constructor(private readonly service: DriverIncidentReportsService) {}

  @Post()
  async createReport(@Body() dto: DriverIncidentReportsDto) {
    return await this.service.createReport(dto);
  }
}
