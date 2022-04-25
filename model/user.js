// firstName (required)
// middleName (optional)
// lastName (required)
// age (required)
// email (required )
// address ( required )
// gender ( optional and should default to Female )
// type (optional and it can take value of customer or employee and if not provided then default to customer )
// createdAt (required)
// updatedAt (required)
const mongoose=require("mongoose")


const userModel=mongoose.Schema({
    "firstName":{type:String,required:true},
    "middleName":{type:String},
    "lastName":{type:String,required:true},
    "age":{type:String,required:true},
    "address":{type:String,required:true},
    "gender":{type:String,default:"female"},
    "type":{type:String,default:"customer"},
})

userModel.set('timestamps',true)

module.exports=mongoose.model("User",userModel)

