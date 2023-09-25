import { Module } from '@nestjs/common';
import { CashinScheduleController } from './cashin-schedule.controller';
import { CashinScheduleService } from './cashin-schedule.service';

@Module({
  controllers: [CashinScheduleController],
  providers: [CashinScheduleService]
})
export class CashinScheduleModule {}
