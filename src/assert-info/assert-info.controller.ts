import { Controller, Post, Body } from '@nestjs/common';
import { AssertInfoService } from './assert-info.service';
import { CreateAssertInfoDTO } from './dto/create-assert-info.dto';
@Controller('assert-info')
export class AssertInfoController {
  constructor(private readonly assertInfoService: AssertInfoService) {}

  @Post()
  async createINfo(@Body() dto: CreateAssertInfoDTO) {
    return await this.assertInfoService.createAssert(dto);
  }
}
