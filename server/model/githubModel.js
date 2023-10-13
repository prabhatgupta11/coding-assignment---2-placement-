const mongoose = require('mongoose');

const githubSchema = new mongoose.Schema({
  id: Number,
  name: String,
  html_url: String,
  description: String,
  created_at: String,
  open_issues: Number,
  watchers: Number,
  owner: {
    type: {
      id: Number,
      avatar_url: String,
      html_url: String,
      type: String,
      site_admin: Boolean
    },
    default: {}
  }
});

const GitHubModel = mongoose.model('GitHubModel', githubSchema);

module.exports = { GitHubModel };
