const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/user",userController.createUser);

module.exports = router;