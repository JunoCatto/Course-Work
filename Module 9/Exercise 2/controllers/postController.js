"use strict";

let Models = require("../models"); // matches index.js

const getUserPosts = (req, res) => {
  // finds all posts for a given user and populates with user details

  Models.Post.find({ userId: req.params.uid })
    .populate({ path: "userId" })

    .then((data) => res.send({ result: 200, data: data }))

    .catch((err) => {
      console.log(err);

      res.send({ result: 500, error: err.message });
    });
};

const createPost = (req, res) => {
  // creates a new user using JSON data POSTed in request body
  console.log(req.body);
  new Models.Post({ ...req.body, author: req.params.pid })
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updatePost = (req, res) => {
  Models.Post.findByIdAndUpdate(req.params.pid, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deletePost = (req, res) => {
  Models.Post.findByIdAndDelete(req.params.pid)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
};
