import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Products extends Document {
    @Prop({unique:true})
    id:string
   
    @Prop({required:true})
    name: String;

    @Prop()
    description: String;

    @Prop({require:true})
    price: Number;

    @Prop({ type: [String] })
    colors: string[];

     @Prop({ type: [String] })
    size: string[];

    @Prop({ type: [String] })
  imageUrls: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Products);
