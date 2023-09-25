import { Test, TestingModule } from '@nestjs/testing';
import { TiltCodesController } from './tilt-codes.controller';

describe('TiltCodesController', () => {
  let controller: TiltCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiltCodesController],
    }).compile();

    controller = module.get<TiltCodesController>(TiltCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
