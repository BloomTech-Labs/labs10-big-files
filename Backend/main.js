require('dotenv').config()

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express()

server.use(cors())
server.use(bodyParser.json())


server.get("/", (req,res) => {
    res.send("Hey hey")
})
// const configureRoutes = require("./routes")
// configureRoutes(server);

server.listen(8000, 
    () => {console.log(`listening on port 8000`)})
