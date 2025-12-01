const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.get("/search", (req, res) => {
  Controllers.userController.searchUsers(req, res);
});
// matches POST requests sent to /api/users/create

router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

// matches PUT requests to /api/users/123 (stores 123 in id param)

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// matches DELETE requests to /api/users/123 (123 in id param)

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

// post Routes

router.get("/:uid/posts", (req, res) => {
  Controllers.postController.getUserPosts(req, res);
});

router.post("/:pid/posts", (req, res) => {
  Controllers.postController.createPost(req, res);
});

router.put("/:pid/posts", (req, res) => {
  Controllers.postController.updatePost(req, res);
});

router.delete("/:pid/posts", (req, res) => {
  Controllers.postController.deletePost(req, res);
});

// comment Routes

router.get("/:pid/comments", (req, res) => {
  Controllers.commentController.getPostComments(req, res);
});

router.post("/:cid/comments", (req, res) => {
  Controllers.commentController.createComment(req, res);
});

router.put("/:cid/comments", (req, res) => {
  Controllers.commentController.updateComment(req, res);
});

router.delete("/:cid/comments", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

// like Routes

router.get("/:pid/likes", (req, res) => {
  Controllers.likeController.getPostLikes(req, res);
});

router.post("/:lid/likes", (req, res) => {
  Controllers.likeController.createLike(req, res);
});

router.put("/:lid/likes", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});

router.delete("/:lid/likes", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
