let Controllers = require("../controllers"); // index.js
let express = require("express");
let router = express.Router();

router.get("/:id/posts/:pid/comments", (req, res) => {
  Controllers.commentController.getComments(req, res);
});

router.post("/:id/posts/:pid/comments", (req, res) => {
  Controllers.commentController.createComments(req, res);
});

router.put("/:id/posts/:pid/comments/:cid", (req, res) => {
  Controllers.commentController.updateComments(req, res);
});

router.delete("/:id/posts/:pid/comments/:cid", (req, res) => {
  Controllers.commentController.deleteComments(req, res);
});

module.exports = router;
