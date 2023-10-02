export type CashTrans = {
  ID: number;

  EntryDate: Date;

  EnteredBy: string;

  TransDate: Date;

  CarReg: string;

  Driver: string;

  DriverDay: string;

  CashinObligation: number;

  CashReceived: number;

  BonusReceived: number;

  DriverLoan: number;

  DriverLoanNote: string;

  CashinDeficit: number;

  CashinNote: string;

  OwnerShare: number;

  OwnerShareNote: string;

  OwnerPayout: number;

  OwnerPayoutNote: string;

  OwnerPayoutPOP: string;

  OwnerLoan: number;

  OwnerLoanNote: string;

  OwnerLoanPOP: string;

  OwnerPendingPayout: number;

  CompanyShare: number;

  CompanyPayout: number;

  CompanyPayoutNote: string;

  CompanyPayoutPOP: string;

  CompanyExpenses: number;

  CompanyExpensesNote: string;

  CompanyExpensesPOP: string;

  CarOwnerNRC: string;

  FundsStatus: string;

  Margin: number;

  TotalLoans: number;

  TotalCashin: number;

  PendingPayout: number;

  TotalPayout: number;

  TotalCashinObligation: number;

  CollectionRate: number;

  TotalPaidOut: number;

  CompanyPendingPayout: number;
};
