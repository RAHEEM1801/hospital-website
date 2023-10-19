var mongoose_=require("mongoose")
var dbconnection="mongodb://127.0.0.1:27017/hospitalproject";

var db_=mongoose_.connect(dbconnection);
var conn=mongoose_.connection;

    conn.once("open",()=>{console.log("connected to database ");})
    conn.on("error",()=>{
        console.log("connection fail");})
    module.exports=db_;