import { Module } from '@nestjs/common';
import { CashTransController } from './cash-trans.controller';
import { CashTransService } from './cash-trans.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_CashTrans } from './cash-trans.entity';
@Module({
  imports: [TypeOrmModule.forFeature([tbl_CashTrans])],
  controllers: [CashTransController],
  providers: [CashTransService],
})
export class CashTransModule {}
