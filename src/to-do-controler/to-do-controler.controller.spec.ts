import { Test, TestingModule } from '@nestjs/testing';
import { ToDoControlerController } from './to-do-controler.controller';

describe('ToDoControlerController', () => {
  let controller: ToDoControlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToDoControlerController],
    }).compile();

    controller = module.get<ToDoControlerController>(ToDoControlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
