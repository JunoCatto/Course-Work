"use strict";

const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");
const like = require("../../Exercise 2/models/like");

async function init() {
  await User.sync(); // sync the model
  await Post.sync(); // sync the model
  await Comment.sync(); // sync the model
  await Like.sync(); // sync the model
  // also sync any extra models here
}

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(User);
Comment.belongsTo(Post);

Like.belongsTo(User);
Like.belongsTo(Post);

init();

module.exports = {
  User, // export the model
  Post,
  Comment,
  Like,
  // also export any extra models here
};
