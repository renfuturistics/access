import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CashTrans } from './cash-trans.entity';
@Injectable()
export class CashTransService {
  constructor(
    @InjectRepository(CashTrans)
    private cashTransRepository: Repository<CashTrans>,
  ) {}

  async createCashTrans(cashTransaction: CashTrans): Promise<CashTrans> {
    const trans = this.cashTransRepository.create(cashTransaction);
    const result = await this.cashTransRepository.save(trans);
    return result;
  }
  async cashTransZero(): Promise<any> {}

  async customQuery(): Promise<any[]> {
    const query = `
      SELECT
        tbl_AssertOwnerInfo.FullNames AS "Assert Owner",
        tbl_AssertInfo.VehicleInfo AS "VehicleInfo",
        qry_CashTransSums.Current,
        qry_CashTransSums.[Current Driver],
        qry_CashTransSums.[Driver Day],
        qry_CashTransSums.[Assert Reg],
        IIf(IsNull(SumOfCashinObligation), 0, SumOfCashinObligation) AS "Cashin Obligation",
        IIf(IsNull(SumOfCashReceived + SumOfBonusReceived), 0, SumOfCashReceived + SumOfBonusReceived) AS "Cash Received",
        IIf(IsNull(SumOfCashinDeficit), 0, SumOfCashinDeficit) AS "Cash Deficit",
        "Owner Share" - "Owner Payout" - "Loans" AS "Owner Pending Pay",
        IIf(IsNull(SumOfOwnerShare), 0, SumOfOwnerShare) AS "Owner Share",
        IIf(IsNull(SumOfOwnerPayout), 0, SumOfOwnerPayout) AS "Owner Payout",
        IIf(IsNull(SumOfLoan), 0, SumOfLoan) AS "Loans",
        "Company Share" - "Company Payout" - "Expenses" AS "Company Pending Pay",
        IIf(IsNull(SumOfCompanyShare), 0, SumOfCompanyShare) AS "Company Share",
        IIf(IsNull(SumOfCompanyPayout), 0, SumOfCompanyPayout) AS "Company Payout",
        IIf(IsNull(SumOfCompanyExpenses), 0, SumOfCompanyExpenses) AS "Expenses",
        qry_CashTransSums.SumOfCashinObligation,
        qry_CashTransSums.SumOfCashReceived,
        qry_CashTransSums.SumOfBonusReceived,
        qry_CashTransSums.SumOfCashinDeficit,
        qry_CashTransSums.SumOfOwnerShare,
        qry_CashTransSums.SumOfOwnerPayout,
        qry_CashTransSums.SumOfLoan,
        qry_CashTransSums.SumOfCompanyShare,
        qry_CashTransSums.SumOfCompanyPayout,
        qry_CashTransSums.SumOfCompanyExpenses
      FROM
        qry_CashTransSums
      LEFT JOIN
        tbl_AssertOwnerInfo ON qry_CashTransSums.CarOwnerNRC = tbl_AssertOwnerInfo.NRC
      -- Add any other JOIN clauses as needed
    `;

    return await this.cashTransRepository.query(query);
  }
}
