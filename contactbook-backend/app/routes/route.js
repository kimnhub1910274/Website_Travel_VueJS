const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route('/login').post(contacts.login);
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/get/:id").get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);
module.exports = router;
