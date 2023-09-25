import { Module } from '@nestjs/common';
import { TiltCodesController } from './tilt-codes.controller';
import { TiltCodesService } from './tilt-codes.service';

@Module({
  controllers: [TiltCodesController],
  providers: [TiltCodesService]
})
export class TiltCodesModule {}
