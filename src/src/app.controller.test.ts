import { Test, TestingModule } from 'npm:@nestjs/testing';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import Jest from 'npm:@jest/globals';

Deno.test('AppController', () => {
  let appController: AppController;

  Jest.beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  Jest.describe('root', () => {
    Jest.it('should return "Hello World!"', () => {
      Jest.expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
