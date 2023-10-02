import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AssertInfoModule } from './assert-info/assert-info.module';
import { AssertDailyReportModule } from './assert-daily-report/assert-daily-report.module';
import { AssertOwnerInfoModule } from './assert-owner-info/assert-owner-info.module';
import { CashinScheduleModule } from './cashin-schedule/cashin-schedule.module';
import { CashTransModule } from './cash-trans/cash-trans.module';
import { CurrentUserModule } from './current-user/current-user.module';
import { DriverCashinScheduleModule } from './driver-cashin-schedule/driver-cashin-schedule.module';
import { DriverInfoModule } from './driver-info/driver-info.module';
import { DriverYangoReportsModule } from './driver-yango-reports/driver-yango-reports.module';
import { ItemsListModule } from './items-list/items-list.module';
import { TiltCodesModule } from './tilt-codes/tilt-codes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DriverIncidentReportsModule } from './driver-incident-reports/driver-incident-reports.module';
import { Sheet1Module } from './sheet1/sheet1.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { tbl_AssertDailyReports } from './assert-daily-report/assert-daily-report.entity';
import { tbl_AssertInfo } from './assert-info/assert-info.entity';
import { tbl_AssertOwnerInfo } from './assert-owner-info/assert-owner-info.entity';
import { tbl_CashTrans } from './cash-trans/cash-trans.entity';
import { tbl_CashinSchedule } from './cashin-schedule/cashin-schedule.entity';
import { tbl_CurrentUser } from './current-user/current-user.entity';
import { tbl_DriverCashinSchedule } from './driver-cashin-schedule/driver-cashin-schedule.entity';
import { tbl_DriverIncidentReports } from './driver-incident-reports/driver-incident-reports.entity';
import { tbl_DriverInfo } from './driver-info/driver-info.entity';
import { tbl_DriverYangoReports } from './driver-yango-reports/driver-yango-reports.entity';
import { tbl_ItemsList } from './items-list/items-list.entity';
import { tbl_TiltCodes } from './tilt-codes/tilt-codes.entity';
import { tbl_Users } from './users/user.entity';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Tanjiro@88',
      database: 'my_nestjs_project',
      entities: [
        tbl_AssertDailyReports,
        tbl_AssertInfo,
        tbl_AssertOwnerInfo,
        tbl_CashTrans,
        tbl_CashinSchedule,
        tbl_CurrentUser,
        tbl_DriverCashinSchedule,
        tbl_DriverIncidentReports,
        tbl_DriverInfo,
        tbl_DriverYangoReports,
        tbl_ItemsList,
        tbl_TiltCodes,
        tbl_Users,
      ],
      synchronize: true,
    }),

    UsersModule,
    AssertInfoModule,
    AssertDailyReportModule,
    AssertOwnerInfoModule,
    CashinScheduleModule,
    CashTransModule,
    CurrentUserModule,
    DriverCashinScheduleModule,
    DriverInfoModule,
    DriverYangoReportsModule,
    ItemsListModule,
    TiltCodesModule,
    DriverIncidentReportsModule,

    Sheet1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
