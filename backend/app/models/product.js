//schema of product developed by Mohd Arbaz Khan 17/08/2021

const mongoose = require("mongoose");

const productSchema=new mongoose.Schema({
    title:{type:String,default:""},
    description:{type:String,default:""},
    
})