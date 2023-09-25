import { Test, TestingModule } from '@nestjs/testing';
import { CashinScheduleController } from './cashin-schedule.controller';

describe('CashinScheduleController', () => {
  let controller: CashinScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashinScheduleController],
    }).compile();

    controller = module.get<CashinScheduleController>(CashinScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
