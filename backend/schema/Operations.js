var mongoose_=require("mongoose")
var schema_=mongoose_.Schema;
var operations=new schema_({

    patientname:{type:String},
    age:{type:Number},
    gender:{type:String},
    blood:{type:String},
    bp:{type:Number},
    weight:{type:Number},
    height:{type:Number},
    sugerlevel:{type:String},
    surgerytype:{type:String},
    gardian:{type:String},
    number:{type:Number}
})

module.exports=mongoose_.model("operationdetails",operations);