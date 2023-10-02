import { Body, Controller, Post } from '@nestjs/common';
import { DriverCashinScheduleService } from './driver-cashin-schedule.service';
import { DriverCashinScheduleDTO } from './dto/driver-cashin-schedule.dto';

@Controller('driver-cashin-schedule')
export class DriverCashinScheduleController {
  constructor(private readonly service: DriverCashinScheduleService) {}

  @Post()
  async createCashTrans(@Body() createcashinDto: DriverCashinScheduleDTO) {
    return await this.service.createDriverCashinSchedule(createcashinDto);
  }
}
