import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Products, ProductSchema } from './products.schema';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name:Products.name,
                schema: ProductSchema
            }
        ])
    ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
