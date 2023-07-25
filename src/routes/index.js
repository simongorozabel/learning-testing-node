const express = require("express");
const cityRouter = require("./city.router");
const router = express.Router();

router.use("/cities", cityRouter);

module.exports = router;
