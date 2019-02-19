
const express = require("express");
const router = express.Router();


var client = new pg.Client(conString);
client.connect();



server.get("/files", async (req, res) => {
    // const {id} = req.params;
    client.query(`SELECT * FROM files`)
	.then(result => {
	    res.status(200).json(result.rows);
	    // process.exit();
	})
	.catch(e => {
	    res.status(404).json(e.stack);
	})
	// .then(() => client.end());
});


server.post("/files", (request, res) => {
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
	// .then(() => client.end())
});



module.exports = router;