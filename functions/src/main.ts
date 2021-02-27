// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
//     await app.listen(3000);
// }
// bootstrap();

import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express from 'express';
import { Express } from 'express-serve-static-core';


const server = express();

const createNestServer = async (expressInstance: Express) => {
    const app = await NestFactory.create(AppModule,
        new ExpressAdapter(expressInstance));
    return app.init();
};

createNestServer(server).then(v => console.log('Nest Ready')).catch(err => console.error('Nest broken', err));


export const api = functions.https.onRequest(server);