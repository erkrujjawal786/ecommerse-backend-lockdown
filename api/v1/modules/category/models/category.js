const mongoose = require('mongoose')
const schema = mongoose.Schema;

const categorySchema = new schema({
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

module.exports = mongoose.model('Category',categorySchema)