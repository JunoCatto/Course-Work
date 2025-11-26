let express = require("express");

let router = express.Router();

let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// Adds a POST route to create a new user

router.post("/", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

// Comment Routes

// router.get("/:id/posts/:pid/comments", (req, res) => {
//   Controllers.commentController.getComments(req, res);
// });

// router.post("/:id/posts/:pid/comments", (req, res) => {
//   Controllers.commentController.createComments(req, res);
// });

// router.put("/:id/posts/:pid/comments/:cid", (req, res) => {
//   Controllers.commentController.updateComments(req, res);
// });

// router.delete("/:id/posts/:pid/comments/:cid", (req, res) => {
//   Controllers.commentController.deleteComments(req, res);
// });

module.exports = router;
