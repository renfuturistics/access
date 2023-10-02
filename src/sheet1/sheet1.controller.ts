import { Body, Controller, Post } from '@nestjs/common';
import { SheetDto } from './dto/sheet.dto';
import { SheetService } from './sheet1.service';

@Controller('sheet')
export class SheetController {
  constructor(private readonly service: SheetService) {}

  @Post()
  async createReport(@Body() dto: SheetDto) {
    return await this.service.createReport(dto);
  }
}
