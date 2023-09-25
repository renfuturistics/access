import { Module } from '@nestjs/common';
import { DriverInfoController } from './driver-info.controller';
import { DriverInfoService } from './driver-info.service';

@Module({
  controllers: [DriverInfoController],
  providers: [DriverInfoService]
})
export class DriverInfoModule {}
