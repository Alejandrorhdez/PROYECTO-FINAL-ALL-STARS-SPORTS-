import mongoose, { Schema } from "mongoose";

const RevieweviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        max:5,
        min:1
    },
    comment:{
        type:String,
        max:500
    }
    });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;