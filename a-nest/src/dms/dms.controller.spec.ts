import { Test, TestingModule } from '@nestjs/testing';
import { DMsController } from './dms.controller';

describe('DmsController', () => {
  let controller: DMsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DMsController],
    }).compile();

    controller = module.get<DMsController>(DMsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
