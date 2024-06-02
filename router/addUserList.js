const express = require("express");
const router = express.Router();

const { addUser } = require("../controller/usetList.controller")

router.get("/", addUser)

module.exports = router;