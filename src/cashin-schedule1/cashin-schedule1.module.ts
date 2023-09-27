import { Module } from '@nestjs/common';
import { CashinSchedule1Controller } from './cashin-schedule1.controller';
import { CashinSchedule1Service } from './cashin-schedule1.service';

@Module({
  controllers: [CashinSchedule1Controller],
  providers: [CashinSchedule1Service]
})
export class CashinSchedule1Module {}
