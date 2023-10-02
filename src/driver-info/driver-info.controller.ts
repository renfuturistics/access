import { Body, Controller, Post } from '@nestjs/common';
import { DriverInfoService } from './driver-info.service';
import { DriverInfoDto } from './dto/driver-info.dto';

@Controller('driver-info')
export class DriverInfoController {
  constructor(private readonly service: DriverInfoService) {}

  @Post()
  async createReport(@Body() dto: DriverInfoDto) {
    return await this.service.createReport(dto);
  }
}
