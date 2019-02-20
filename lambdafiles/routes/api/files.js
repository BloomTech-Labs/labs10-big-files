require("dotenv").config();
const express = require("express");
const router = express.Router();
const pg = require("pg");

var client = new pg.Client(process.env.RDS_SECRET);
client.connect();

router.get("/hi", (req, res) => {
    res.send("Hello, world");
  });

router.get("/files", async (req, res) => {
    client.query(`SELECT * FROM files`)
	.then(result => {
	    res.status(200).json(result.rows);
	})
	.catch(e => {
        console.error(e),
	    res.status(404).json(e.stack);
	})
});

router.post("/files", (request, res) => {
    console.log("RequestB", request.body);
    const { filename, file_size, URLs, upload_date, file_id, FK_user_id} = request.body;
    client.query(`INSERT INTO files (
		filename, file_size, URL, upload_date, file_id, FK_user_id)
    VALUES ($1, $2, $3, $4, $5, $6)`,[filename, file_size, URL, upload_date, file_id, FK_user_id])
	.then(result => {
	    res.status(200).json(result);
	    // process.exit();
	})
	.catch(e => {
	    console.error(e.detail),
	    res.send(e)
	})
});


// router.delete("/files", (request, res) => {
//     console.log("RequestB", request.body);
//     const { filename, file_size, URLs, upload_date, file_id, FK_user_id} = request.body;
//     client.query(`INSERT INTO files (
// 		filename, file_size, URL, upload_date, file_id, FK_user_id)
//     VALUES ($1, $2, $3, $4, $5, $6)`,[filename, file_size, URL, upload_date, file_id, FK_user_id])
// 	.then(result => {
// 	    res.status(200).json(result);
// 	    // process.exit();
// 	})
// 	.catch(e => {
// 	    console.error(e.detail),
// 	    res.send(e)
// 	})
// });


module.exports = router;
