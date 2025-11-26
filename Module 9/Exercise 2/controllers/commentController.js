"use strict";

let Models = require("../models"); // matches index.js

const getComments = (req, res) => {
  // finds all users

  Models.Comment.find({ userId: req.params.uid, postId: req.params.pid })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createComments = (req, res) => {
  // creates a new user using JSON data POSTed in request body

  console.log(req.body);

  new Models.Comment({
    ...req.body,
    userId: req.params.id,
    postId: req.params.pid,
  })
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComments = (req, res) => {
  // updates the user matching the ID from the param using JSON data POSTed in request body

  console.log(req.body);

  Models.Comment.findByIdAndUpdate(req.params.cid, req.body, {
    new: true,
  })

    .then((data) => res.send({ result: 200, data: data }))

    .catch((err) => {
      console.log(err);

      res.send({ result: 500, error: err.message });
    });
};

const deleteComments = (req, res) => {
  // deletes the user matching the ID from the param

  Models.Comment.findByIdAndDelete(req.params.cid)

    .then((data) => res.send({ result: 200, data: data }))

    .catch((err) => {
      console.log(err);

      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getComments,
  createComments,
  updateComments,
  deleteComments,
};
