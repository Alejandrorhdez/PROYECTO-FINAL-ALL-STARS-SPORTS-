import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:1
    },
    stock:{
        type:Number,
        required:true,
        min:0
    },
    imagesURL:[{
        type:String,
        trim:true,
        default:'http//placehold.co/800x600.png',
    }],
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;