import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './products.schema';
import { CreateProductsDto } from './createProducts.dto';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Products.name) private readonly productsModel) { }

  async insertProductWithImages(productData: CreateProductsDto): Promise<Products> {
    console.log(productData)
    console.log('entrando al service ')
    try {
      const newProduct = new this.productsModel(productData);
      console.log('guadando y enviando ', newProduct)
      const savedProduct = await newProduct.save();
      return savedProduct;
    } catch (e) {
      throw new Error('Error al guardar los datos del producto con las URLs de las imágenes.');
    }
  }

  async getProductsAll(): Promise<Products[]> {
    return await this.productsModel.find()
  }
}
