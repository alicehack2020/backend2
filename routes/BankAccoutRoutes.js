const express = require("express");
const routes=express.Router()
const Bankontroller=require("../controllers/BankController.js")
const UserController=require("../controllers/UserControlles.js")

routes.get("/masteraccount",Bankontroller.masteraccount)
routes.post("/SavingsAccount",Bankontroller.SavingsAccount)
routes.post("/FixedAccount",Bankontroller.FixedAccount)
routes.get("/masteraccount/:id",Bankontroller.masteraccountid)
routes.delete("/fixedaccount/:id",Bankontroller.fixedaccountid)
routes.post("/maturitytransfer/:id",Bankontroller.maturitytransferid)
routes.post("/userRegister",UserController.userRegister)

module.exports=routes