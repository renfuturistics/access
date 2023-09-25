import { Test, TestingModule } from '@nestjs/testing';
import { AssertOwnerInfoController } from './assert-owner-info.controller';

describe('AssertOwnerInfoController', () => {
  let controller: AssertOwnerInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssertOwnerInfoController],
    }).compile();

    controller = module.get<AssertOwnerInfoController>(AssertOwnerInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
