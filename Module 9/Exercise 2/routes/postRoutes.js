let express = require("express");

let router = express.Router();

let Controllers = require("../controllers"); // index.js

router.get("/:id/posts", (req, res) => {
  Controllers.postController.getUserPosts(req, res);
});

router.post("/:id/posts", (req, res) => {
  Controllers.postController.createPost(req, res);
});

router.put("/:id/posts/:pid", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

router.delete("/:id/posts/:pid", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
