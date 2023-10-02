import { Controller, Post, Get, Body } from '@nestjs/common';
import { TiltCodesService } from './tilt-codes.service';
import { createTiltCodesDTO } from './dto/createTitlCode.dto';

@Controller('tilt-codes')
export class TiltCodesController {
  constructor(private readonly titlCodeService: TiltCodesService) {}

  async createTiltCode(@Body() createTiltCodesDTO: createTiltCodesDTO) {
    return await this.titlCodeService.createTiltCodes(createTiltCodesDTO);
  }
}
