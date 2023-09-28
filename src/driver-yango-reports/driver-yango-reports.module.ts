import { Module } from '@nestjs/common';
import { DriverYangoReportsController } from './driver-yango-reports.controller';
import { DriverYangoReportsService } from './driver-yango-reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_DriverYangoReports } from './driver-yango-reports.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tbl_DriverYangoReports])],
  controllers: [DriverYangoReportsController],
  providers: [DriverYangoReportsService],
})
export class DriverYangoReportsModule {}
