import { InjectModel } from '@nestjs/mongoose';
import { AssertInfo } from './assert-info.type.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_AssertInfo } from './assert-info.entity.js';

import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class AssertInfoService {
  constructor(
    @InjectRepository(tbl_AssertInfo)
    private readonly repository: Repository<tbl_AssertInfo>,
  ) {}

  async createAssert(assertInfo: AssertInfo) {
    const newInfo = this.repository.create({ ...assertInfo });
    return this.repository.save(newInfo);
  }
}
