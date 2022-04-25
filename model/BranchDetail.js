// name (required)
// address (required)
// IFSC (required and string)
// MICR (required and number )
// createdAt (required)
// updatedAt (required)

const mongoose=require("mongoose")
const BranchDetails=mongoose.Schema({
    "name":{type:String,required:true},
    "address":{type:String,required:true},
    "IFSC":{type:String,required:true},
    "MICR":{type:String,required:true},
})

BranchDetails.set('timestamps',true)

module.exports=mongoose.model("BranchDetails",BranchDetails)
