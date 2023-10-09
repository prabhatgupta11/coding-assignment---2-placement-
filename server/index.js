const express=require("express")
const { connection } = require("./config/db")
const { githubRouter } = require("./routes/githubRoutes")
const app=express()
require('dotenv').config()
app.use(express.json())

app.get("/",(req,res)=>{
    try{
     
        res.status(200).json("Welcome to Home page")
    }catch(err)
    {
        res.send(err.message)
    }
})

//All the router

app.use("/api",githubRouter)

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
