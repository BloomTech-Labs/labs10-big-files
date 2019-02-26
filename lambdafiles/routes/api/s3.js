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
  }),
  limits: { fileSize: 2000000 } // In bytes: 2000000 bytes = 2 MB
}).single("fileUpload");

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

router.get('/files/:id', (req, res) => {
    const fileID = req.params.id;
    client.query(`SELECT * FROM files WHERE file_id = ${fileID}`)
        .then(result => {
        res.status(200).json(result.rows);
        //console.log(`works ${fk_user_id}`);
    })
    .catch(e => {
        console.error(e), res.send(e);
    });
});


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

// (POST FK —> PUT URL)
// ROUTE TO UPLOAD FILE
router.put("/files", (req, res) => {
    console.log("REQ", req);
    console.log("REQ_BODY", req.body);
    fileUpload(req, res, error => {
	if (error) {
	    console.log("errors:", error);
	    res.json({ error: error });
	} else {
	    // If File not found
	    if (req.file === undefined) {
		console.log("Error: No File Selected!");
		res.json("Error: No File Selected");
	    } else {
        client.query(`UPDATE files SET url = '${req.file.location}' 
        WHERE file_id = (select MAX(file_id) FROM files)
        RETURNING file_id  `)
		    .then(result => {
			res.status(200).json(result);
		    })
		    .catch(e => {
			console.error(e.detail), res.send(e);
		    });
	    }
	}
    });
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

// ROUTE TO UPLOAD FILE PAID USER?
router.post("/paidfiles/id", (request, res) => {
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

router.put("/paidfiles/", (req, res) => {
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
		client.query(`UPDATE files SET url = '${req.file.location}' WHERE file_id = (select MAX(file_id) FROM files) `)
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
router.delete("/files/delete/:id", (req, res) => {
    const fileID = req.params.id;
    // var params = {
    //   Bucket: "s3lambdafiles123",
    //   Key: "file.txt"
    // };
    client
	.query("DELETE FROM files WHERE file_id = $1", [fileID])
	.then(result => {
	    res.status(200).json(result);
	})
	.catch(e => {
	    console.error(e.detail), res.send(e);
	});
});

module.exports = router;
