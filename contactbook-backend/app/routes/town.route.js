const express = require("express");
const town = require("../controllers/town.controller")
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

router.route('/create').post(upload.single('photo'),town.create)

router.route('/createContent').post(upload.array('content',10),town.createContent)

router.route('/getAll').get(town.findAll);

router.route('/getTrending').get(town.findTrending);

router.route("/delete/:id").delete(town.delete);

router.route("/deleteContent/:id").delete(town.deleteContent);

router.route("/get/:id").get(town.findOne);

router.route("/getContent/:id").get(town.findContents);

router.route("/getContentById/:id").get(town.findOneContentById);

router.route("/findTownByName/:search").get(town.findTownByName);

router.route("/update/:id").put(upload.single('photo'),town.update);

router.route("/updateContent/:id").put(upload.array('content',10),town.updateContent);

module.exports = router;