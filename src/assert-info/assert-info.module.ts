import { Module } from '@nestjs/common';
import { AssertInfoController } from './assert-info.controller';
import { AssertInfoService } from './assert-info.service';
import { MongooseModule } from '@nestjs/mongoose';
import { assertInfoSchema } from './asset-info.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'AssertInfo', schema: assertInfoSchema },
    ]),
  ],
  controllers: [AssertInfoController],
  providers: [AssertInfoService],
})
export class AssertInfoModule {}
