import { Module } from '@nestjs/common';
import { AssertInfoController } from './assert-info.controller';
import { AssertInfoService } from './assert-info.service';
import { MongooseModule } from '@nestjs/mongoose';
import { assertInfoSchema } from './asset-info.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_AssertInfo } from './assert-info.entity.js';
@Module({
  imports: [TypeOrmModule.forFeature([tbl_AssertInfo])],
  controllers: [AssertInfoController],
  providers: [AssertInfoService],
})
export class AssertInfoModule {}
