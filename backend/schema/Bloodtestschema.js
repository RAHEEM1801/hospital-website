var mongoose_=require("mongoose")
var schema_=mongoose_.Schema;
var blooddetails=new schema_({

    patientname:{type:String},
    bloodgroup:{type:String},
    gender:{type:String},
    date:{type:Number},
    physician:{type:String},
    lab:{type:String}
})

module.exports=mongoose_.model("bloodsamples",blooddetails);
