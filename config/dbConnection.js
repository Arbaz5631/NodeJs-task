import mongoose from "mongoose";
import DBUrl from "./env/development";
export default class DBConnection {
    static connect () {
        console.log("DB trying to connect on "+ new Date() + "to url "+DBUrl.DB);

        const optiions = {
            keepAlive:1,
            useNewUrlParser:true,
            useUndefiedTopology:true
        }
      return mongoose.connect(DBUrl.DB,options)
    }
}