import { Body, Controller, Post } from '@nestjs/common';
import { ItemsListDto } from './dto/items-list.dto';
import { ItemsListService } from './items-list.service';

@Controller('items-list')
export class ItemsListController {
  constructor(private readonly service: ItemsListService) {}

  @Post()
  async createReport(@Body() dto: ItemsListDto) {
    return await this.service.createReport(dto);
  }
}
