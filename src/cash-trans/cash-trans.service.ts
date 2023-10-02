import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_CashTrans } from './cash-trans.entity';
import { tbl_DriverInfo } from 'src/driver-info/driver-info.entity';

@Injectable()
export class CashTransService {
  constructor(
    @InjectRepository(tbl_CashTrans)
    private readonly cashTransRepository: Repository<tbl_CashTrans>,
  ) {}

  async createCashTrans(
    cashTransaction: tbl_CashTrans,
  ): Promise<tbl_CashTrans> {
    const trans = this.cashTransRepository.create(cashTransaction);
    const result = await this.cashTransRepository.save(trans);
    return result;
  }
}
