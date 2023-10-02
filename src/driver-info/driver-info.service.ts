import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_DriverInfo } from './driver-info.entity';
import { DriverInfo } from './driver-info.type';

@Injectable()
export class DriverInfoService {
  constructor(
    @InjectRepository(tbl_DriverInfo)
    private readonly repository: Repository<tbl_DriverInfo>,
  ) {}

  async createReport(report: DriverInfo): Promise<tbl_DriverInfo> {
    const trans = this.repository.create({ ...report });
    const result = await this.repository.save(trans);
    return result;
  }
}
