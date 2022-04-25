// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// createdAt (required)
// updatedAt (required)


const mongoose=require("mongoose")
const SavingsAccount=mongoose.Schema({
    "account_number ":{type:String,required:true,unique:true},
    "balance ":{type:String,required:true},
    "interestRate ":{type:String,required:true},
})

SavingsAccount.set('timestamps',true)

module.exports=mongoose.model("SavingsAccount",SavingsAccount)