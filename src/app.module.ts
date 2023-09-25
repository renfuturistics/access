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
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.CLOUD_ATLAS_URL!!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
