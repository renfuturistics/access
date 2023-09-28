import { Module } from '@nestjs/common';
import { Sheet1Controller } from './sheet1.controller';
import { Sheet1Service } from './sheet1.service';

@Module({
  controllers: [Sheet1Controller],
  providers: [Sheet1Service]
})
export class Sheet1Module {}
