import { Test, TestingModule } from '@nestjs/testing';
import { DriverInfoService } from './driver-info.service';

describe('DriverInfoService', () => {
  let service: DriverInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverInfoService],
    }).compile();

    service = module.get<DriverInfoService>(DriverInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
