require("dotenv").config();
const express = require("express");
// const pg = require("pg");
// const helmet = require("helmet");
// const forever = require("forever");

//Routes
const userRoute = require("../routes/api/users");
const fileRoute = require("../routes/api/files");
const s3Route = require("../routes/api/s3");

var port = process.env.PORT || 3000,
  http = require("http"),
  fs = require("fs"),
  html = fs.readFileSync("index.html");

// server
const server = express();
server.use(express.json());

// ??
// const conString = process.env.CON_STRING;
// var client = new pg.Client(conString);
// client.connect();

//routes
server.use("/api/users/", userRoute);
server.use("/api/files/", fileRoute);
server.use("/api/s3/", s3Route);

module.exports = server;
