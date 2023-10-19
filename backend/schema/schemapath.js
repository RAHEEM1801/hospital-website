var mongoose_=require("mongoose");
var schema_=mongoose_.Schema;
var hospitaldata=new schema_({

    patiant:{type:String},
    age:{type:Number},
    gender:{type:String},
    number:{type:Number}

})

module.exports=mongoose_.model("patientdetails",hospitaldata);