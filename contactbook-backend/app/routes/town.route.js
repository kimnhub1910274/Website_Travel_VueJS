const express = require("express");
const towns = require("../controllers/town.controller");

const router = express.Router();

router.route("/")
    .get(towns.findAll)
    .post(towns.create)
    .delete(towns.deleteAll);

router.route("/favorite")
    .get(towns.findAllFavorite);

router.route("/:id")
    .get(towns.findOne)
    .put(towns.update)
    .delete(towns.delete);


module.exports = router;



