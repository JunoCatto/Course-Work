"use strict";

const Models = require("../models");

const getPostComments = (req, res) => {
  Models.Comment.findAll({
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

const createComment = (req, res) => {
  console.log(req.body);
  Models.Comment.create(req.body)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateComment = (req, res) => {
  Models.Comment.update(req.body, {
    where: { id: req.params.cid },
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

const deleteComment = (req, res) => {
  Models.Comment.destroy({ where: { id: req.params.cid } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPostComments,
  createComment,
  updateComment,
  deleteComment,
};
