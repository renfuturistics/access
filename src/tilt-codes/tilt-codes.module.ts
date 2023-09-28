import { Module } from '@nestjs/common';
import { TiltCodesController } from './tilt-codes.controller';
import { TiltCodesService } from './tilt-codes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tbl_TiltCodes } from './tilt-codes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([tbl_TiltCodes])],
  controllers: [TiltCodesController],
  providers: [TiltCodesService],
})
export class TiltCodesModule {}
