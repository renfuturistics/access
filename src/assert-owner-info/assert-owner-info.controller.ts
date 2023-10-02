import { Body, Controller, Post } from '@nestjs/common';
import { AssertOnwerInfoDTO } from './dto/assert-owner-info.dto';
import { AssertOwnerInfo } from './assert-owner-info.service';

@Controller('assert-owner-info')
export class AssertOwnerInfoController {
  constructor(private service: AssertOwnerInfo) {}
  @Post()
  async createReport(@Body() createAssertDto: AssertOnwerInfoDTO) {
    return await this.service.createAssert(createAssertDto);
  }
}
