const express = require("express");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");
const pg = require("pg");

/**
 *       SETUP
 * express.Router() creates modular, mountable route handlers
 * A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
 */
const router = express.Router();

var client = new pg.Client(process.env.RDS_SECRET);
client.connect();

// Using AWS-SDK to set up profile
const s3 = new aws.S3({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  Bucket: process.env.Bucket
});

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("Hello, world");
});

/**
 *
 * FREE USER FILES
 *
 */

//Single File Upload
const Bucket = process.env.Bucket;

const fileUpload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "s3lambdafiles123",
    // acl: "public-read",
    key: function(req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    }
    // key: function (req, file, cb) {
    //     console.log(file);
    //     cb(null, file.originalname); //use Date.now() for unique file keys
    // }
  }),

  limits: { fileSize: 2000000 } // In bytes: 2000000 bytes = 2 MB
  // fileFilter: function(req, file, cb) {
  // 	checkFileType(file, cb);
  // }
}).single("fileUpload");

// ROUTE TO UPLOAD FILE
router.post("/files", (req, res) => {
  console.log("REQ", req);
  console.log("REQ_BODY", req.body);
  fileUpload(req, res, error => {
    // console.log( 'requestOkokok', req.file );
    // console.log( 'error', error );
    if (error) {
      console.log("errors:", error);
      res.json({ error: error });
    } else {
      // If File not found
      if (req.file === undefined) {
        console.log("Error: No File Selected!");
        res.json("Error: No File Selected");
      } else {
        // If Success
        const url = req.file.location;
        // const fk_user_id = 3;
        client
          .query(`INSERT INTO files (url, fk_user_id) VALUES ($1, $2)`, [
            url,
            fk_user_id
          ])
          .then(result => {
            res.status(200).json(result);
          })
          .catch(e => {
            console.error(e), res.send(e);
          });
        // Save the file name into database into profile model
        // res.json({
        //     url
        // });
      }
    }
  });
});

/**
 *
 * PAID USER FILES
 *
 */

// DELETE ROUTE
router.delete("/files", (req, res) => {
  const fileID = req.params.id;
  var params = {
    Bucket: "s3lambdafiles123",
    Key: "file.txt"
  };
  s3.deleteObject(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
      console.log("hi");
      return res.send({ error: err });
    } else {
      console.log(data);
      return res.send({ completed: "done" });
    }
  });
});

module.exports = router;

// NOTES

// Retrieves a URL from an S3 Bucket
// router.get('/files', (req, res) => {
//     var params = {
// 	Bucket: "s3lambdafiles123",
// 	Key: "file.txt"
//     };
//     s3.getObject(params, function(err, data) {
// 	const imageLocation = req.file.location;
// 	if (err) {
// 	    console.log(err, err.stack);
// 	    console.log("hi");
// 	    return res.send({ "error": err });
// 	}
// 	// an error occurred
// 	else {
// 	    console.log(data);
// 	    res.json({
// 		location: imageLocation
// 	    });
// 	} // successful response
//     });
// });
