const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
    name: {
        type: String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Subcategory',subcategorySchema)