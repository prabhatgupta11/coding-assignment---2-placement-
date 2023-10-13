const express = require("express");
const axios = require("axios");
const { GitHubModel } = require("../model/githubModel");
const githubRouter = express.Router();

const githubController = require("../controller/githubController");

githubRouter.post("/github", async (req, res) => {
  try {
 
    const response = await axios.get(req.body.url);

    const repositories = response.data; 

    for (const repo of repositories) {
      const {
          id,
          name,
          html_url,
          description,
          created_at,
          open_issues,
          watchers,
          owner
      } = repo;

      const { id: ownerId, avatar_url, html_url: ownerHtmlUrl, type, site_admin } = owner;

      // Create an instance of the GitHubModel
      const data = new GitHubModel({
          id,
          name,
          html_url,
          description,
          created_at,
          open_issues,
          watchers,
          owner: {
              id: ownerId,
              avatar_url,
              html_url: ownerHtmlUrl,
              type,
              site_admin
          }
      });

   
      // Save the data to MongoDB
      await data.save();
  }

//   // Use findOneAndUpdate with upsert option to update or create a document based on 'id'
//   await GitHubModel.findOneAndUpdate({ id }, data, {
//     upsert: true,
//     new: true,
//     runValidators: true,
//   });
// }

  res.send("GitHub data saved successfully.");

  } catch (err) {
    console.log("working")
    res.send(err.message);
  }
});

//get router
githubRouter.get("/github/:id",async(req,res)=>{
  try{
    let id=req.params.id
    const data = await GitHubModel.findOne({ id});
    res.status(200).json(data)

  }catch(err)
  {
    res.status(401).json(err.message)
  }
})

module.exports = {
  githubRouter,
};
