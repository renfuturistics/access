import { Module } from '@nestjs/common';
import { ItemsListController } from './items-list.controller';
import { ItemsListService } from './items-list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_ItemsList } from './items-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tbl_ItemsList])],
  controllers: [ItemsListController],
  providers: [ItemsListService],
})
export class ItemsListModule {}
