import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  BadGatewayException,
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IAssertInfo } from './asset-info.model';
@Injectable()
export class AssertInfoService {
  constructor(
    @InjectModel('AssertInfo')
    private readonly assertInfoModel: Model<IAssertInfo>,
  ) {}

  async createAssertInfo(body: any) {
    const assertInfo = await this.assertInfoModel.create(body);
    if (!assertInfo) throw new BadRequestException('Failed to insert data');
    return assertInfo;
  }
}
