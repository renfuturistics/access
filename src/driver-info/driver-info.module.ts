import { Module } from '@nestjs/common';
import { DriverInfoController } from './driver-info.controller';
import { DriverInfoService } from './driver-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_DriverInfo } from './driver-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tbl_DriverInfo])],
  controllers: [DriverInfoController],
  providers: [DriverInfoService],
})
export class DriverInfoModule {}
