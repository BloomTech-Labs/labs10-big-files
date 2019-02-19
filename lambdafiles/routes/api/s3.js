const express = require("express");
const router = express.Router();
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");

router.get("/", (req, res) => {
  res.send("Hello, world");
});

module.exports = router;
