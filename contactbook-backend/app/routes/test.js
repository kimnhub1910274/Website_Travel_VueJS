const express = require("express");
const contacts = require("../controllers/test.controller");
const multer = require("multer");
const router = express.Router();


const path = './assets/images';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path)
    },
    filename: function (req, file, cb) {
        cb(null,file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
})
   
var upload = multer({ storage: storage })
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);
module.exports = router;
