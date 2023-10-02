import { Controller, Post, Body } from '@nestjs/common';
import { CashinScheduleService } from './cashin-schedule.service';
@Controller('cashin-schedule')
export class CashinScheduleController {
  constructor(private readonly cashinScheduleService: CashinScheduleService) {}
}
