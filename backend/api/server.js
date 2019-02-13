const express = require("express");
const applyGlobalMiddleware = require("../config/globalMiddleware.js");
const testRoute = require("../routes/testRoute.js");

// server
const server = express();

// middleware
applyGlobalMiddleware(server);

// routes

server.use("/api/testroute/", testRoute);

module.exports = server;
