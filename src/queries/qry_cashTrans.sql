SELECT
    MAX(tbl_cash_trans.TransDate) AS `Current`,
    MAX(tbl_driver_info.FullNames) AS `Current Driver`,
    MAX(tbl_cash_trans.DriverDay) AS `Driver Day`,
    tbl_cash_trans.CarReg AS `Assert Reg`,
    SUM(tbl_cash_trans.CashinObligation) AS `SumOfCashinObligation`,
    SUM(tbl_cash_trans.CashReceived) AS `SumOfCashReceived`,
    SUM(tbl_cash_trans.BonusReceived) AS `SumOfBonusReceived`,
    SUM(tbl_cash_trans.DriverLoan) AS `SumOfDriverLoan`,
    SUM(tbl_cash_trans.CashinDeficit) AS `SumOfCashinDeficit`,
    SUM(tbl_cash_trans.OwnerShare) AS `SumOfOwnerShare`,
    SUM(tbl_cash_trans.OwnerPayout) AS `SumOfOwnerPayout`,
    SUM(tbl_cash_trans.OwnerLoan) AS `SumOfLoan`,
    SUM(tbl_cash_trans.CompanyShare) AS `SumOfCompanyShare`,
    SUM(tbl_cash_trans.CompanyPayout) AS `SumOfCompanyPayout`,
    SUM(tbl_cash_trans.CompanyExpenses) AS `SumOfCompanyExpenses`,
    tbl_cash_trans.CarOwnerNRC
FROM
    tbl_cash_trans
LEFT JOIN
    tbl_driver_info ON tbl_driver_info.NRC = tbl_cash_trans.Driver
GROUP BY
    tbl_cash_trans.CarReg, tbl_cash_trans.CarOwnerNRC;
