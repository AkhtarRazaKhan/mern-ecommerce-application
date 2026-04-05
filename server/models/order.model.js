import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    
    },
    delivery_address: {
        type: mongoose.Schema.ObjectId,
        ref: "address"
    },

    subTotalAmt: {
        type: Number,
        default : 0
    },

    totalAmt: {
        type: Number,
        default : 0
    },

},{
    timestamps: true
})

const OrderModel = mongoose.model('order',orderSchema)

export default OrderModel