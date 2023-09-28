import { Module } from '@nestjs/common';
import { DriverCashinScheduleController } from './driver-cashin-schedule.controller';
import { DriverCashinScheduleService } from './driver-cashin-schedule.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_DriverCashinSchedule } from './driver-cashin-schedule.entity';
@Module({
  imports: [TypeOrmModule.forFeature([tbl_DriverCashinSchedule])],
  controllers: [DriverCashinScheduleController],
  providers: [DriverCashinScheduleService],
})
export class DriverCashinScheduleModule {}
