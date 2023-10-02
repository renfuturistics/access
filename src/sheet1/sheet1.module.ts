import { Module } from '@nestjs/common';
import { SheetController } from './sheet1.controller';
import { SheetService } from './sheet1.service';
import { Sheet } from './sheet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Sheet])],
  controllers: [SheetController],
  providers: [SheetService],
})
export class Sheet1Module {}
