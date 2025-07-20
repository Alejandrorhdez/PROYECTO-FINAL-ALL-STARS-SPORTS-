import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, //sale de la base de datos
        ref:'User',
        require:true,
    },
    products:[
        {product:{
            type:mongoose.Schema.Types.ObjectId, //sale de la base de datos
        ref:'Product',
        require: true
        },
        quantity:{
            type:Number,
            required:true,
            min: 1
             }
        }
    ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;