import { Controller, Post, Body } from '@nestjs/common';
import { CashinScheduleService } from './cashin-schedule.service';
import { CashinScheduleDto } from './dto/cashin-schedule.dto';
@Controller('cashin-schedule')
export class CashinScheduleController {
  constructor(private readonly service: CashinScheduleService) {}

  @Post()
  async createCashTrans(@Body() createUserDto: CashinScheduleDto) {
    return await this.service.createCashinSchedule(createUserDto);
  }
}
