import { Test, TestingModule } from '@nestjs/testing';
import { AssertInfoController } from './assert-info.controller';

describe('AssertInfoController', () => {
  let controller: AssertInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssertInfoController],
    }).compile();

    controller = module.get<AssertInfoController>(AssertInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
