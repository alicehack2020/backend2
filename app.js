const express=require("express")
const app=express()
app.use(express.json())
const dbCoonection=require("./config/DB.js")
const routes=require("./routes/BankAccoutRoutes.js")

app.use(routes)


app.listen(2000,()=>{
    new dbCoonection()
    console.log("server on");
})


