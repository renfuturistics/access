import { InjectModel } from '@nestjs/mongoose';
import { AssertOnwerInfo } from './assert-owner.type.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_AssertOwnerInfo } from './assert-owner-info.entity.js';

import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AssertOwnerInfoService {
  constructor(
    @InjectRepository(tbl_AssertOwnerInfo)
    private readonly repository: Repository<tbl_AssertOwnerInfo>,
  ) {}

  async createAssert(assertInfo: AssertOnwerInfo) {
    const newInfo = this.repository.create({ ...assertInfo });
    return this.repository.save(newInfo);
  }
}
