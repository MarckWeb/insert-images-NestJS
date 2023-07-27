//instalar npm install class-validator
import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateProductsDto {
    @IsNumber()
    id: number
   
    @IsString()
    @IsNotEmpty()
    name: String;

    @IsString()
    @IsNotEmpty()
    description: String;

    @IsNumber()
    price: Number;

    @IsArray()
    colors: [String];

    @IsArray()
    size: [String];

}
