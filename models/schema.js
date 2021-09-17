const mongoose = require("mongoose");
const validator = require("validator");
const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        required:true
    },
    productType: {
        type: String,
        required: true,

    },
    price:{
        type: Number,
        required: true,
    },
    url:{
        type:String,
        
    }

})
const ProductModel = new mongoose.model('ProductDb', ProductSchema);
module.exports = ProductModel;