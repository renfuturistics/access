import { Module } from '@nestjs/common';
import { AssertOwnerInfoController } from './assert-owner-info.controller';

@Module({
  controllers: [AssertOwnerInfoController]
})
export class AssertOwnerInfoModule {}
