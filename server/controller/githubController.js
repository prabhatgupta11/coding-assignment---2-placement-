const axios = require('axios');

const {GitHubModel}=require("../model/githubModel")

const saveGithubDataToMongoDB= async(url)=>{
    const response = await axios.get(url);
    const githubRepos = response.data;
    console.log(githubRepos)

}


module.exports={
    saveGithubDataToMongoDB
}