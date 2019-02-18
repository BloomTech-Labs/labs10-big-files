require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

module.exports = server => {
  server.use(
    express.json(),
    cors({ credentials: true, origin: true }),
    helmet()
  );
};
