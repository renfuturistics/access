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
  async cashTransactionSummary() {
    // Using the TypeORM query builder to construct the SQL query
    const queryBuilder = this.repository.createQueryBuilder('tbl_cash_trans');

    const result = await queryBuilder
      .select([
        'MAX(tbl_cash_trans.TransDate) AS current',
        'MAX(tbl_DriverInfo.FullNames) AS currentDriver',
        'MAX(tbl_cash_trans.DriverDay) AS driverDay',
        'tbl_cash_trans.CarReg AS assertReg',
        'SUM(tbl_cash_trans.CashinObligation) AS sumOfCashinObligation',
        'SUM(tbl_cash_trans.CashReceived) AS sumOfCashReceived',
        'SUM(tbl_cash_trans.BonusReceived) AS sumOfBonusReceived',
        'SUM(tbl_cash_trans.DriverLoan) AS sumOfDriverLoan',
        'SUM(tbl_cash_trans.CashinDeficit) AS sumOfCashinDeficit',
        'SUM(tbl_cash_trans.OwnerShare) AS sumOfOwnerShare',
        'SUM(tbl_cash_trans.OwnerPayout) AS sumOfOwnerPayout',
        'SUM(tbl_cash_trans.OwnerLoan) AS sumOfLoan',
        'SUM(tbl_cash_trans.CompanyShare) AS sumOfCompanyShare',
        'SUM(tbl_cash_trans.CompanyPayout) AS sumOfCompanyPayout',
        'SUM(tbl_cash_trans.CompanyExpenses) AS sumOfCompanyExpenses',
        'tbl_cash_trans.CarOwnerNRC',
      ])
      .leftJoin(
        'tbl_DriverInfo',
        'tbl_DriverInfo',
        'tbl_DriverInfo.NRC = tbl_cash_trans.Driver',
      )
      .groupBy('tbl_cash_trans.CarReg, tbl_cash_trans.CarOwnerNRC')
      .getRawOne(); // Assuming you expect only one row as the result

    return result;
  }
}
