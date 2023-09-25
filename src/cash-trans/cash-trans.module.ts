import { Module } from '@nestjs/common';
import { CashTransController } from './cash-trans.controller';
import { CashTransService } from './cash-trans.service';

@Module({
  controllers: [CashTransController],
  providers: [CashTransService]
})
export class CashTransModule {}
