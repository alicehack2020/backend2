const mongoose =require("mongoose")

class DBconnection{
    constructor()
    {
        this.connectDB()
    }

    connectDB(){
        mongoose.connect("mongodb://localhost:27017/SpacexBank")
        mongoose.connection.once('open',()=>{
            console.log("connection sucessfully");
        })

        mongoose.connection.on('on',()=>{
            console.log("connection failled");
        })
    }
}
module.exports=DBconnection