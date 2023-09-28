import { Test, TestingModule } from '@nestjs/testing';
import { DriverIncidentReportsController } from './driver-incident-reports.controller';

describe('DriverIncidentReportsController', () => {
  let controller: DriverIncidentReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverIncidentReportsController],
    }).compile();

    controller = module.get<DriverIncidentReportsController>(DriverIncidentReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
