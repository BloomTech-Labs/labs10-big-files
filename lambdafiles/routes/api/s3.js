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

//Single File Upload
const fileUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "",
    acl: "public-read",
    key: function(req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    }
  }),
  limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single("fileUpload");

router.get("/", (req, res) => {
  res.send("Hello, world");
});

module.exports = router;
