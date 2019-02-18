const express = require("express");
// const knex = require('knex');
const pg = require("pg");
const helmet = require("helmet");
const forever = require("forever");
require("dotenv").config();

var port = process.env.PORT || 3000,
  http = require("http"),
  fs = require("fs"),
  html = fs.readFileSync("index.html");

const server = express();
server.use(express.json());

// const db = knex(knexConfig.development);

// ?
const conString = process.env.con_string;
var client = new pg.Client(conString);
client.connect();

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + port + "/");
