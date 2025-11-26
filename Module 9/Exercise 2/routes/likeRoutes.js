let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/:id/posts/:pid/likes", (req, res) => {
  Controllers.likeController.getLikes(req, res);
});

router.post("/:id/posts/:pid/likes", (req, res) => {
  Controllers.likeController.createLike(req, res);
});

router.put("/:id/posts/:pid/likes/:lid", (req, res) => {
  Controllers.likeController.updateLike(req, res);
});

router.delete("/:id/posts/:pid/likes/:lid", (req, res) => {
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
