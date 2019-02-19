require("dotenv").config();
const express = require("express");
// const helmet = require("helmet");
// const forever = require("forever");

// Required for Stripe to work
// const cors = require('cors');

//Routes
// const stripeRoute = require("../routes/api/payment");
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
// server.use(cors())

//This passes the server functionality to payment.js. Not sure how to implement below
// stripeRoute(server)

//routes
server.use("/api/users/", userRoute);
server.use("/api/files/", fileRoute);
server.use("/api/s3/", s3Route);
// server.use("/api/stripe", stripeRoute);

module.exports = server;
