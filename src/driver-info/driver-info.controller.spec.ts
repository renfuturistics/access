import { Test, TestingModule } from '@nestjs/testing';
import { DriverInfoController } from './driver-info.controller';

describe('DriverInfoController', () => {
  let controller: DriverInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverInfoController],
    }).compile();

    controller = module.get<DriverInfoController>(DriverInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
