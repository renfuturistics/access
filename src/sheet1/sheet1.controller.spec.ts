import { Test, TestingModule } from '@nestjs/testing';
import { Sheet1Controller } from './sheet1.controller';

describe('Sheet1Controller', () => {
  let controller: Sheet1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Sheet1Controller],
    }).compile();

    controller = module.get<Sheet1Controller>(Sheet1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
