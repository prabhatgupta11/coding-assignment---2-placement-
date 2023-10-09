const mongoose = require("mongoose");

const githubSchema = mongoose.Schema({
  name: String,
  html_url: String,
  description: String,
  created_at: String,
  open_issues: String,
  watchers: String,
  owner: {
    id: String,
    avatar_url: String,
    html_url: String,
    type: Boolean,
    site_admin: String,
  },
});

const GitHubModel=mongoose.model("github_data",githubSchema)

module.exports={
    GitHubModel
}
