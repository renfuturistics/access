import { BadRequestException, Injectable } from '@nestjs/common';
import { ICashInSchedule } from './cashin-schedule.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { tbl_CashinSchedule } from './cashin-schedule.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class CashinScheduleService {
  constructor(
    @InjectRepository(tbl_CashinSchedule)
    private readonly cashinScheduleModel: Repository<tbl_CashinSchedule>,
  ) {}
}
