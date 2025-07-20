import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    displayName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        match: [/^(([^<>()[]\.,;:\s@`]+(.[^<>()[]\.,;:\s@`]+)*)|(`.+`))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email']
    },
    hashPassword:{
        type:String,
        required:true,

    },
    role:{
        type:String,
        required:true,
        enum:['admin','customer','guest'],
    },
    avatar:{
        type:String,
        required:true,
        default:'http//placehold.co/800x600.png'
    },
    phone:{
        type:String,
        required:true,
        max:10
    },
    isActive:{
        type:Boolean,
        default:true
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;