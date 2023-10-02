import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverYangoReports } from './driver-yango-reports.type';
import { tbl_DriverYangoReports } from './driver-yango-reports.entity';

@Injectable()
export class DriverYangoReportsService {
  constructor(
    @InjectRepository(tbl_DriverYangoReports)
    private readonly repository: Repository<tbl_DriverYangoReports>,
  ) {}

  async createReport(report: DriverYangoReports): Promise<DriverYangoReports> {
    const trans = this.repository.create({ ...report });
    const result = await this.repository.save(trans);
    return result;
  }
}
