import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_ItemsList } from './items-list.entity';
import { ItemsList } from './items-list.type';

@Injectable()
export class ItemsListService {
  constructor(
    @InjectRepository(tbl_ItemsList)
    private readonly repository: Repository<tbl_ItemsList>,
  ) {}

  async createReport(report: ItemsList): Promise<tbl_ItemsList> {
    const trans = this.repository.create({ ...report });
    const result = await this.repository.save(trans);
    return result;
  }
}
