import { Test, TestingModule } from '@nestjs/testing';
import { DriverYangoReportsController } from './driver-yango-reports.controller';

describe('DriverYangoReportsController', () => {
  let controller: DriverYangoReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverYangoReportsController],
    }).compile();

    controller = module.get<DriverYangoReportsController>(DriverYangoReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
