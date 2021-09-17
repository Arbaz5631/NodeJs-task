import * as ypu from "yup";
module.exports={

    validateAddProduct:async(req,res,next)=>{
    let schema= yup.object().shape({
         title:yup.string().required(),
         description:yup.string().required(),
         category:yup.string().required(),
         price:yup.number().required(),
         productCode:yup.number().required(),
    })
     await validate(schema,req.body,res,next);
    }
}