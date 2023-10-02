import { Injectable } from '@nestjs/common';
import { tbl_DriverIncidentReports } from './driver-incident-reports.entity';
import { DriverIncidentReports } from './driver-incident-reports.type';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DriverIncidentReportsService {
  constructor(
    @InjectRepository(tbl_DriverIncidentReports)
    private readonly repository: Repository<tbl_DriverIncidentReports>,
  ) {}

  async createReport(
    report: DriverIncidentReports,
  ): Promise<tbl_DriverIncidentReports> {
    const trans = this.repository.create({ ...report });
    const result = await this.repository.save(trans);
    return result;
  }
}
