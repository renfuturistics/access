import { Test, TestingModule } from '@nestjs/testing';
import { ItemsListController } from './items-list.controller';

describe('ItemsListController', () => {
  let controller: ItemsListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsListController],
    }).compile();

    controller = module.get<ItemsListController>(ItemsListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
