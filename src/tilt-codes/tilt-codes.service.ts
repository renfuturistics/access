import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tbl_TiltCodes } from './tilt-codes.entity';
import { createTiltCodesDTO } from './dto/createTitlCode.dto';
@Injectable()
export class TiltCodesService {
  constructor(
    @InjectRepository(tbl_TiltCodes)
    private readonly tiltCodesrepository: Repository<tbl_TiltCodes>,
  ) {}

  async createTiltCodes(titlcode: createTiltCodesDTO) {
    const newTiltCode = this.tiltCodesrepository.create({ ...titlcode });
    return this.tiltCodesrepository.save(newTiltCode);
  }
}
