const express = require("express");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");
/**
 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 */
const router = express.Router();

// Using AWS-SDK to set up profile
const s3 = new aws.S3({
  accessKeyId: "",
  secretAccessKey: "",
  Bucket: ""
});

router.get("/", (req, res) => {
  res.send("Hello, world");
});

module.exports = router;
