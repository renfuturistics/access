import { Module } from '@nestjs/common';
import { ItemsListController } from './items-list.controller';
import { ItemsListService } from './items-list.service';

@Module({
  controllers: [ItemsListController],
  providers: [ItemsListService]
})
export class ItemsListModule {}
