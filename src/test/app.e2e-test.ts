import { Test, TestingModule } from 'npm:@nestjs/testing';
import { INestApplication } from 'npm:@nestjs/common';
import * as request from 'npm:supertest';
import { AppModule } from './../src/app.module.ts';
import Jest from 'npm:@jest/globals';

Deno.test('AppController (e2e)', () => {
  let app: INestApplication;

  Jest.beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  Jest.it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
