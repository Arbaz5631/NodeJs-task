const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://arbaz:arbaz@cluster0.rdvcy.mongodb.net/ARLehngaSaree?retryWrites=true&w=majority",{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("db is connected...");
}).catch((e)=>{
    console.log("Not connected..",e);
})