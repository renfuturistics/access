import { Test, TestingModule } from '@nestjs/testing';
import { DriverIncidentReportsService } from './driver-incident-reports.service';

describe('DriverIncidentReportsService', () => {
  let service: DriverIncidentReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverIncidentReportsService],
    }).compile();

    service = module.get<DriverIncidentReportsService>(DriverIncidentReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
