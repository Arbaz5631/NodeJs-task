const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./db/conn");
// const Book=require("./models/book");
app.use(express.json());
const port= process.env.PORT || 8000;
const ProductRouter=require('./Router/routers')
app.use('/getRecords',ProductRouter)
app.use('/setRecords',ProductRouter)

app.listen(port,()=>{
    console.log(`run port ${port}`);
})