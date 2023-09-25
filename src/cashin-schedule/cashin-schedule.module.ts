import { Module } from '@nestjs/common';
import { CashinScheduleController } from './cashin-schedule.controller';
import { CashinScheduleService } from './cashin-schedule.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CashInScheduleSchema } from './cashin-schedule.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CashInSchedule', schema: CashInScheduleSchema },
    ]),
  ],
  controllers: [CashinScheduleController],
  providers: [CashinScheduleService],
})
export class CashinScheduleModule {}
