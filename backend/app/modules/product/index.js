import BLManager from "./manager";
import ProductModel from "../../models/product"
export default class ProductController{

    async addProduct(req,res){
        const productObj=ProductModel(req.body)
        await productObj.save();
    }
}