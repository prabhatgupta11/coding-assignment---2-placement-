const express=require("express")
const app=express()
require('dotenv').config()
app.listen(process.env.PORT,()=>{
    try{
        console.log(`server is runnig at ${process.env.PORT}`)

    }catch(err)
    {
        console.log(err)
    }
})
