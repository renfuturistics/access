import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  BadGatewayException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { tbl_DriverCashinSchedule } from './driver-cashin-schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { DriverCashinSchedule } from './driver-cashin-schedule.type';
@Injectable()
export class DriverCashinScheduleService {
  constructor(
    @InjectRepository(tbl_DriverCashinSchedule)
    private readonly repository: Repository<tbl_DriverCashinSchedule>,
  ) {}

  async createDriverCashinSchedule(
    cashinSchedule: DriverCashinSchedule,
  ): Promise<tbl_DriverCashinSchedule> {
    const trans = this.repository.create({ ...cashinSchedule });
    const result = await this.repository.save(trans);
    return result;
  }
}
