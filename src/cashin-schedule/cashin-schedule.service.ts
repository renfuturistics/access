import { BadRequestException, Injectable } from '@nestjs/common';

import { tbl_CashinSchedule } from './cashin-schedule.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CashinSchedule } from './cashin-schedule.type';
@Injectable()
export class CashinScheduleService {
  constructor(
    @InjectRepository(tbl_CashinSchedule)
    private readonly repository: Repository<tbl_CashinSchedule>,
  ) {}

  async createCashinSchedule(
    cashinSchedule: CashinSchedule,
  ): Promise<tbl_CashinSchedule> {
    const trans = this.repository.create({ ...cashinSchedule });
    const result = await this.repository.save(trans);
    return result;
  }
}
