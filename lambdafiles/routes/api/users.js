const express = require("express");
const router = express.Router();

module.exports = router;

server.get("/", (req, res) => {
  res.send("Hello, world");
});

server.get("/users/:id", async (req, res) => {
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

server.get("/users", async (req, res) => {
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
