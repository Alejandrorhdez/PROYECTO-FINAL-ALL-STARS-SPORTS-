import mongoose, { Schema } from "mongoose";

const shippingAddressSchema = new mongoose.Schema({
    user:{
            type:mongoose.Schema.Types.ObjectId, //sale de la base de datos
            ref:'User',
            required:true
        },
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true,
            min:4,
            max:6
        }
});

const ShippingAddress = mongoose.model('ShippingAddress', shippingAddressSchema);

module.exports = ShippingAddress;