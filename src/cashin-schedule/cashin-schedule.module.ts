import { Module } from '@nestjs/common';
import { CashinScheduleController } from './cashin-schedule.controller';
import { CashinScheduleService } from './cashin-schedule.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CashInScheduleSchema } from './cashin-schedule.model';
import { tbl_CashinSchedule } from './cashin-schedule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([tbl_CashinSchedule])],
  controllers: [CashinScheduleController],
  providers: [CashinScheduleService],
})
export class CashinScheduleModule {}
