const mongoose = require("mongoose");

const githubSchema = mongoose.Schema({
    id: Number,
    name: String,
    html_url: String,
    description: String,
    created_at: String,
    open_issues: Number,
    watchers: Number,
    owner: {
      id: Number,
      avatar_url: String,
      html_url: String,
      type: String,
      site_admin: Boolean
    }
});

const GitHubModel=mongoose.model("github_data",githubSchema)

module.exports={
    GitHubModel
}
