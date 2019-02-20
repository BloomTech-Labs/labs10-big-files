const express = require("express");
const router = express.Router();
const pg = require("pg");

var client = new pg.Client(process.env.RDS_SECRET);
client.connect();

router.get("/", (req, res) => {
  res.send("Hello, world");
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  client
    .query(`SELECT * FROM users WHERE users.user_id = ${id}`)
    .then(result => {
      res.status(200).json(result.rows);
      // process.exit();
    })
    .catch(e => {
      res.status(404).json(e.stack);
    });
  // .then(() => client.end());
});


// router.post("/users/username", async (request, res) => {
//     console.log("RB", request.body);
//     const {username} = request.body;
//     //const username = 'caitlin4';
//     //console.log(request);
//     client
//     // .query(`SELECT * FROM users WHERE users.username LIKE username`)
// 	.query(`SELECT * FROM users WHERE users.username LIKE '${username}'`)
// 	.then(result => {
// 	    res.status(200).json(result.rows);
// 	})
// 	.catch(e => {
// 	    res.status(404).json(e.stack);	    
// 	});
// });

router.get("/:username", async (req, res) => {
    const ARBITRARY = req.params.username;
    console.log("ARB", ARBITRARY);
    client
	.query(`SELECT * FROM users WHERE username LIKE '${ARBITRARY}'`)
	.then(result => {
	    res.status(200).json(result.rows);
	    // process.exit();
	})
	.catch(e => {
	    res.status(404).json(e.stack);
	});
    // .then(() => client.end());
});

router.get("/users", async (req, res) => {
  client
    .query(`SELECT * FROM users`)
    .then(result => {
      res.status(200).json(result.rows);
      // process.exit();
    })
    .catch(e => {
      res.status(404).json(e.stack);
    });
  // .then(() => client.end());
});

router.post("/users", (request, res) => {
  console.log("RB", request.body);
  const {
    username,
    paid,
    email
  } = request.body;
  client
    .query(
      `INSERT INTO users (
    username, paid, email)
    VALUES ($1, $2, $3)`,
      [username, paid, email]
    )
    .then(result => {
      res.status(200).json(result);
      // process.exit();
    })
    .catch(e => {
      console.error(e.detail), res.send(e);
    });
  // .then(() => client.end())
});

//change username
// router.put('/users/:id/changename', (request, res) => {
//     const id = parseInt(request.params.id);
//     const {username} = request.body;
//     client.query(`UPDATE users SET username=($1) WHERE users.user_id = $2`, [username, id])
//     	.then(result => {
// 	    res.status(200).json(result);
// 	})
// 	.catch(e => {
// 	    console.error(e),
// 	    res.send(e)
// 	})
// });

router.delete("/delete/:id", (request, res) => {
  const userID = parseInt(request.params.id);
  client
    .query("DELETE FROM users WHERE user_id = $1", [userID])
    .then(result => {
      res.status(200).json(result);
    })
    .catch(e => {
      console.error(e.detail), res.send(e);
    });
});

module.exports = router;
