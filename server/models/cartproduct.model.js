import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({

    ProductId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    },

    quantity: {
        type: Number,
        default : 1
    },

    userId: {
        type: mongoose.Schema.ObjectId,
        ref :"User"
    },

},{
    timestamps: true
})

const cartProductModel = mongoose.model('cartProduct',cartProductSchema)

export default cartProductModel