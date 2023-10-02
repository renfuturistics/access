import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sheet } from './sheet.entity';

@Injectable()
export class SheetService {
  constructor(
    @InjectRepository(Sheet)
    private readonly repository: Repository<Sheet>,
  ) {}

  async createReport(report: Sheet): Promise<Sheet> {
    const trans = this.repository.create({ ...report });
    const result = await this.repository.save(trans);
    return result;
  }
}
