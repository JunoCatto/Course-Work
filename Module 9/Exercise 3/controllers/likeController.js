"use strict";

const Models = require("../models");

const getPostLikes = (req, res) => {
  Models.Like.findAll({
    where: { postId: req.params.pid },
    include: Models.User,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLike = (req, res) => {
  console.log(req.body);
  Models.Like.create(req.body)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateLike = (req, res) => {
  Models.Like.update(req.body, {
    where: { id: req.params.lid },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteLike = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.lid } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPostLikes,
  createLike,
  updateLike,
  deleteLike,
};
