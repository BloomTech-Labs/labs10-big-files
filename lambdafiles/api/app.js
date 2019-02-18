const express = require("express");
// const knex = require('knex');
const pg = require("pg");
const helmet = require("helmet");
const forever = require("forever");
require("dotenv").config();
//Routes
const userRoute = require("../routes/api/users");
const s3Route = require("../routes/api/s3");

var port = process.env.PORT || 3000,
  http = require("http"),
  fs = require("fs"),
  html = fs.readFileSync("index.html");

// server
const server = express();
server.use(express.json());

// const db = knex(knexConfig.development);

// ?
const conString = process.env.con_string;
var client = new pg.Client(conString);
client.connect();

//routes
server.use("/api/users/", userRoute);
server.use("/api/s3/", s3Route);

module.exports = server;
