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
  console.log(req.params)
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

router.get("/:username", async (req, res) => {
  const ARBITRARY  = req.params.username;
  console.log("ARB", ARBITRARY)
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
    logged_in,
    email,
    created_at,
    last_login
  } = request.body;
  client
    .query(
      `INSERT INTO users (
    username, paid, logged_in, email, created_at, last_login)
    VALUES ($1, $2, $3, $4, $5, $6)`,
      [username, paid, logged_in, email, created_at, last_login]
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
