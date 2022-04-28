const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.get("/all", userController.getUser);

router.post("/new", userController.createUser);

router.post("/login", userController.loginUser);

module.exports = router;
