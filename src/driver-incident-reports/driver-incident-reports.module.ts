import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_DriverIncidentReports } from './driver-incident-reports.entity';
import { DriverIncidentReportsController } from './driver-incident-reports.controller';
import { DriverIncidentReportsService } from './driver-incident-reports.service';
@Module({
  imports: [TypeOrmModule.forFeature([tbl_DriverIncidentReports])],
  controllers: [DriverIncidentReportsController],
  providers: [DriverIncidentReportsService],
})
export class DriverIncidentReportsModule {}
