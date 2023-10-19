var mongoose_=require("mongoose")
var schema_=mongoose_.Schema
var docters=new schema_({

    hospital:{type:String},
    doctor:{type:String},
    specialist:{type:String},
    number:{type:String}

})

module.exports=mongoose_.model("docterlist",docters);