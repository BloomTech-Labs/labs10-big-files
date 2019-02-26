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
const Bucket = process.env.Bucket;

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

router.get('/files', (req, res) => {
    client.query(`SELECT * FROM files`)
        .then(result => {
        res.status(200).json(result.rows);
        //console.log(`works ${fk_user_id}`);
    })
    .catch(e => {
        console.error(e), res.send(e);
    });
});

// (POST FK —> PUT URL)
// ROUTE TO UPLOAD FILE
router.put("/files", (req, res) => {
	console.log("REQ", req)
	console.log("REQ_BODY", req.body)
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
		// const url = req.file.location;
		// const fk_user_id = 3;
		// client.query(`UPDATE files SET url = 'abvb' WHERE file_id = (select MAX(file_id) FROM files) RETURNING file_id`)
		client.query(`UPDATE files SET url = '${req.file.location}' WHERE file_id = (select MAX(file_id) FROM files) `)
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
/**
 *
 * PAID USER FILES
 *
 */

const paidFileUpload = multer({
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
  }),

  limits: { fileSize: 4000000 } // In bytes: 4000000 bytes = 4 MB
}).single("fileUpload");

// ROUTE TO UPLOAD FILE
router.post("/paidfiles", (req, res) => {
  console.log("REQ", req);
  console.log("REQ_BODY", req.body);
  paidFileUpload(req, res, error => {
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
      }
    }
  });
});

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

router.post("/files/id", (request, res) => {
	console.log("RB", request.body);
    const { fk_user_id, filename } = request.body;
	client.query(
	    `INSERT INTO files (fk_user_id, filename) VALUES ($1, $2) RETURNING file_id`, [fk_user_id, filename])
	  .then(result => {
		res.status(200).json(result.rows);
		// process.exit();
	  })
	  .catch(e => {
		console.error(e.detail), res.send(e);
	  });
	// .then(() => client.end())
  });


// router.put("/files/id", (req, res) => {
//     const {fk_user_id} = req.params;
//     client.query(`UPDATE files SET fk_user_id = ${fk_user_id} WHERE file_id = (select MAX(file_id) FROM files) VALUES ($1)`, [fk_user_id])
//         .then(result => {
//         res.status(200).json(result);
//     })
//     .catch(e => {
//         console.error(e), res.send(e);
//     });
// });

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
