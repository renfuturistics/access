import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_CashTrans } from './cash-trans.entity';

import { CashTrans } from './cash-trans.type';

@Injectable()
export class CashTransService {
  constructor(
    @InjectRepository(tbl_CashTrans)
    private readonly repository: Repository<tbl_CashTrans>,
  ) {}

  async createCashTrans(cashTransaction: CashTrans): Promise<tbl_CashTrans> {
    const trans = this.repository.create({ ...cashTransaction });
    const result = await this.repository.save(trans);
    return result;
  }
}
