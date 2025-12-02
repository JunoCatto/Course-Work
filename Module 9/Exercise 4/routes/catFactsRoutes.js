const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/catfacts", Controllers.catFactsController.getCatFacts);
router.get("/breed/:breed", Controllers.catFactsController.getBreed);

module.exports = router;
