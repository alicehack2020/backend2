const express=require("express")
const mongoose=require("mongoose")
const user=require("../model/user.js")
class UserController{ 
    static userRegister=async(req,res,next)=>{
        let data=req.body
        let response=await user.insertMany([data])
        res.send(response)
    }
}


module.exports=UserController