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
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    Bucket: process.env.Bucket
});

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

// TEST ROUTE
router.get("/", (req, res) => {
  res.send("Hello, world");
});

// ROUTE TO UPLOAD FILE
router.post("/files", (req, res) => {
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
		const imageName = req.file.key;
		const imageLocation = req.file.location;
		// Save the file name into database into profile model
		res.json({
		    image: imageName,
		    location: imageLocation
		});
	    }
	}
    });
});

module.exports = router;
