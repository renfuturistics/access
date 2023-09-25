import { Module } from '@nestjs/common';
import { DriverCashinScheduleController } from './driver-cashin-schedule.controller';
import { DriverCashinScheduleService } from './driver-cashin-schedule.service';

@Module({
  controllers: [DriverCashinScheduleController],
  providers: [DriverCashinScheduleService]
})
export class DriverCashinScheduleModule {}
