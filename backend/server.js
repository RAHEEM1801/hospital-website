var express_=require("express");
var myserver=express_();
var routes_=require('./route/routepath');
require("./database/db");
var cor=require("cors")
myserver.listen(3080,()=>{console.log("server started");});
myserver.use(express_.urlencoded({extended:false}));
myserver.use(express_.json());
myserver.use(cor())
myserver.use('/',routes_)
myserver.use('/',(req,res)=>{
    res.send("welcome");
});
