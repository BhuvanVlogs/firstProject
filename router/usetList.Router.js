const express = require("express");
const router = express.Router();

const { userList } = require("../controller/usetList.controller")

router.get('/', userList)

module.exports = router;