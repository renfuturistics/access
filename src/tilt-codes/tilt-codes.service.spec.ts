import { Test, TestingModule } from '@nestjs/testing';
import { TiltCodesService } from './tilt-codes.service';

describe('TiltCodesService', () => {
  let service: TiltCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiltCodesService],
    }).compile();

    service = module.get<TiltCodesService>(TiltCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
