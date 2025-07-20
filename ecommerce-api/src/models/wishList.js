import mongoose, { Schema } from "mongoose";

const wishListSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, //sale de la base de datos
        ref:'User',
        required:true
    },
        products:[
        {
            product:{
            type:mongoose.Schema.Types.ObjectId, //sale de la base de datos
            ref:'Product',
            required:true
            },
        addedAt:{
            type:Date,
            default:Date.now
            }
        }
    ],
});

const WishList = mongoose.model('WishList', wishListSchema);

module.exports = WishList;