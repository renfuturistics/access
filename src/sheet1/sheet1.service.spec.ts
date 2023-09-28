import { Test, TestingModule } from '@nestjs/testing';
import { Sheet1Service } from './sheet1.service';

describe('Sheet1Service', () => {
  let service: Sheet1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Sheet1Service],
    }).compile();

    service = module.get<Sheet1Service>(Sheet1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
