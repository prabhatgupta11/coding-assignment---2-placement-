const express=require("express");
const axios = require('axios');
const { GitHubModel }=require("../model/githubModel")
const githubRouter=express.Router();

const githubController=require("../controller/githubController")

githubRouter.post("/github",async(req,res)=>{
    try{
    
       
       // console.log(999,req.body);
     const response = await axios.get(req.body.url);
    
     const vvv=response.data;

     
        const obj = vvv.map(e => {
         return e
        });

        let val=obj.forEach(e => {
           
            console.log(11,e)
            const info={id:e.id,name:e.name}
            return info
        });
        res.status(200).json(val)

        
    //  const {id,
    //     name,
    //     html_url,
    //     description,
    //     created_at,
    //     open_issues,
    //     watchers} = obj.forEach(element => element);

     

        // console.log(888,id,
        //     name,
        //     html_url,
        //     description,
        //     created_at,
        //     open_issues,
        //     watchers)

    //  const data =new GitHubModel({id,
    //     name,
    //     html_url,
    //     description,
    //     created_at,
    //     open_issues,
    //     watchers
    // })
     //await data.save()
     //console.log(data)

     
     
  

    }catch(err)
    {
        res.send(err.message)
    }
})

module.exports={
    githubRouter
}