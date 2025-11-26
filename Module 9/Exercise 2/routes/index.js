const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");
const likeRoutes = require("./likeRoutes");

router.use("/", userRoutes);
router.use("/", postRoutes);
router.use("/", commentRoutes);
router.use("/", likeRoutes);

module.exports = router;
