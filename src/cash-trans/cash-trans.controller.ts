import {
  Controller,
  Post,
  Get,
  Request,
  Body,
  Param,
  Put,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CashTransService } from './cash-trans.service';
import { CashTransDto } from './dto/cash-trans.dto';
@Controller('cash-trans')
export class CashTransController {
  constructor(private readonly service: CashTransService) {}

  @Post()
  async createCashTrans(@Body() createUserDto: CashTransDto) {
    return await this.service.createCashTrans(createUserDto);
  }
}
