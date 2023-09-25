import { Module } from '@nestjs/common';
import { AssertInfoController } from './assert-info.controller';
import { AssertInfoService } from './assert-info.service';

@Module({
  controllers: [AssertInfoController],
  providers: [AssertInfoService]
})
export class AssertInfoModule {}
