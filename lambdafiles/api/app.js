require("dotenv").config();
const express = require("express");
// const helmet = require("helmet");
// const forever = require("forever");
const cors = require('cors')

//Routes
const userRoute = require("../routes/api/users");
const fileRoute = require("../routes/api/files");
const s3Route = require("../routes/api/s3");
const stripeRoute = require("../routes/api/payment");

var port = process.env.PORT || 3000,
http = require("http"),
fs = require("fs"),
html = fs.readFileSync("index.html");

// server
const server = express();
server.use(express.json());
server.use(cors())

stripeRoute(server)

//routes
server.use("/api/users/", userRoute);
server.use("/api/files/", fileRoute);
server.use("/api/s3/", s3Route);
// server.use("/api/stripe", stripeRoute);

module.exports = server;
