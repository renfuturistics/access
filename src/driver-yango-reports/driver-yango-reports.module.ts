import { Module } from '@nestjs/common';
import { DriverYangoReportsController } from './driver-yango-reports.controller';
import { DriverYangoReportsService } from './driver-yango-reports.service';

@Module({
  controllers: [DriverYangoReportsController],
  providers: [DriverYangoReportsService]
})
export class DriverYangoReportsModule {}
