import * as ValidateManager from "../middleware/validation";
import ProductModule from "../app/modules/product";

module.exports=(app)=>{
    app.post("/save-product",ValidateManager.validateAddProduct,new ProductModule().addProduct);
    app.get("/product-list",)
}