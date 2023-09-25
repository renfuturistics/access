import { Controller, Post, Body } from '@nestjs/common';
import { AssertInfoService } from './assert-info.service';
@Controller('assert-info')
export class AssertInfoController {
  constructor(private readonly assertInfoService: AssertInfoService) {}

  @Post()
  async createAssertInfo(@Body() body: any) {
    return await this.assertInfoService.createAssertInfo(body);
  }
}
