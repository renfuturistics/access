import { Test, TestingModule } from '@nestjs/testing';
import { CashinSchedule1Controller } from './cashin-schedule1.controller';

describe('CashinSchedule1Controller', () => {
  let controller: CashinSchedule1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashinSchedule1Controller],
    }).compile();

    controller = module.get<CashinSchedule1Controller>(CashinSchedule1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
