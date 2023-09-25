import { Test, TestingModule } from '@nestjs/testing';
import { DriverYangoReportsService } from './driver-yango-reports.service';

describe('DriverYangoReportsService', () => {
  let service: DriverYangoReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverYangoReportsService],
    }).compile();

    service = module.get<DriverYangoReportsService>(DriverYangoReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
