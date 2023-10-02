import { Module } from '@nestjs/common';
import { AssertOwnerInfoController } from './assert-owner-info.controller';
import { tbl_AssertOwnerInfo } from './assert-owner-info.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssertOwnerInfoService } from './assert-owner-info.service';
@Module({
  imports: [TypeOrmModule.forFeature([tbl_AssertOwnerInfo])],
  controllers: [AssertOwnerInfoController],
  providers: [AssertOwnerInfoService],
})
export class AssertOwnerInfoModule {}
