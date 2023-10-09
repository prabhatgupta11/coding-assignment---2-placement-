const express=require("express")
const { connection } = require("./config/db")
const app=express()
require('dotenv').config()



app.listen(process.env.PORT,async()=>{
    try{
        console.log(`server is runnig at ${process.env.PORT}`)
       await connection;
       console.log("connected to database")

    }catch(err)
    {
        console.log(err)
    }
})
