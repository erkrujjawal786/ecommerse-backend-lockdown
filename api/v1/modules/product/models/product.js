const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    categoryId: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    productName: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    flatDiscount: {
        type: Boolean,
        default: true
    },
    discountAmount: {
        type: Number,
        default: false
    },
    basePrice: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)