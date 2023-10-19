var express_=require('express');
var routes_=express_.Router();
var[patietpost,patiantget,bloodpost,bloodget,opepostionpost,getoperation]=require("../controlers/control");

routes_.post('/postdata',patietpost);
routes_.get('/gettingdata',patiantget);

routes_.post('/postblooddetails',bloodpost);
routes_.get('/getblooddetails',bloodget);

routes_.post('/postoperation',opepostionpost);
routes_.get("/getoperation",getoperation);
module.exports=routes_;


// doctopost,doctoget
// routes_.post('/postdoct',doctopost);
// routes_.get('/gettingdoct',doctoget);