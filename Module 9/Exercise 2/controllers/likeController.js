"use strict";

let Models = require("../models");

const getLikes = (req, res) => {
  Models.Like.find({ userId: req.params.uid, postId: req.params.pid })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLike = (req, res) => {
  new Models.Like({
    ...req.body,
    userId: req.params.uid,
    postId: req.params.pid,
  })
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateLike = (req, res) => {
  Models.Like.findByIdAndUpdate(req.params.lid, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteLike = (req, res) => {
  Models.Like.findByIdAndDelete(req.params.lid)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  createLike,
  updateLike,
  deleteLike,
};
