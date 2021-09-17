const express = require("express");
const router = express.Router()

const ProductDb=require("../models/schema");


router.get('/getProduct',async(req,res)=>{
    try{
       const data= await ProductDb.find({})
       res.json(data);
    }catch(err){
        res.send('Error'+ err)
    }
})
router.post('/saveProduct',async(req,res)=>{
    const data=new ProductDb({
        productName:req.body.productName,
        productType:req.body.productType,
        price:req.body.price,
        url:req.body.url
    })
    try{
        const a1= await data.save();
        res.json("data saved");
    }catch(err){
        res.send('Error'+err);

    }

})
module.exports=router;