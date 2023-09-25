import { Test, TestingModule } from '@nestjs/testing';
import { DriverCashinScheduleController } from './driver-cashin-schedule.controller';

describe('DriverCashinScheduleController', () => {
  let controller: DriverCashinScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverCashinScheduleController],
    }).compile();

    controller = module.get<DriverCashinScheduleController>(DriverCashinScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
