import { Test, TestingModule } from 'npm:@nestjs/testing';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { describe, beforeEach, it, expect } from 'npm:@jest/globals';

Deno.test('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
