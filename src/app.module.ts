import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/store'),
    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // 
      serveRoot: '/uploads', 
    }),
    ProductsModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
