import { BadRequestException, Injectable } from '@nestjs/common';
import { ICashInSchedule } from './cashin-schedule.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class CashinScheduleService {
  constructor(
    @InjectModel('CashInSchedule')
    private readonly cashinScheduleModel: Model<ICashInSchedule>,
  ) {}

  async createCashinSchedule(body: any) {
    const cashinSchedule = await this.cashinScheduleModel.create(body);
    if (!cashinSchedule) throw new BadRequestException('Failed to insert data');
    return cashinSchedule;
  }
}
