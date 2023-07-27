import { Body, Controller, Get, Post, Res, HttpStatus, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';

import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';


import { ProductsService } from './products.service';
import { CreateProductsDto } from './createProducts.dto';
import { Response } from 'express';
import { Products } from './products.schema';
import { multerConfig, fileFilter } from './helpers/multer.config';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) { }

    @Post()
    @UseInterceptors(FilesInterceptor('files', 7, { ...multerConfig, fileFilter }))
    async uploadFiles(@UploadedFiles() files: Express.Multer.File[], @Body() createProductDto: CreateProductsDto, @Res() res: Response) {
        const imageUrls = files.map(file => `http://localhost:3000/uploads/${file.filename}`);
        const productDataWithImages = { ...createProductDto, imageUrls };

        try {
            const product = await this.productsService.insertProductWithImages(productDataWithImages);
            res.status(HttpStatus.CREATED).send({ message: 'Datos e imágenes guardados exitosamente', product });
        } catch (e) {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Error al guardar los datos y las imágenes.');
        }
    }

    @Get()
    async getProductsAll(): Promise<Products[]> {
        return await this.productsService.getProductsAll();
    }
}


//TIPO SDE STATUS
// HttpStatus.OK: Código de estado 200 (OK).
// HttpStatus.CREATED: Código de estado 201 (CREATED).
// HttpStatus.BAD_REQUEST: Código de estado 400 (BAD REQUEST).
// HttpStatus.UNAUTHORIZED: Código de estado 401 (UNAUTHORIZED).
// HttpStatus.FORBIDDEN: Código de estado 403 (FORBIDDEN).
// HttpStatus.NOT_FOUND: Código de estado 404 (NOT FOUND).
// HttpStatus.INTERNAL_SERVER_ERROR: Código de estado 500 (INTERNAL SERVER ERROR).



