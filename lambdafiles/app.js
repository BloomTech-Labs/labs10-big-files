const express = require('express');
// const knex = require('knex');
const pg = require('pg');
const helmet = require('helmet');
const forever = require('forever');
// const knexConfig = require('./knexfile.js');
// console.log(knexConfig);

var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

const server = express();
server.use(express.json());

// const db = knex(knexConfig.development);

server.get('/', (req, res) => {
    res.send('Hello, world');
});

var conString = "postgres://bfatester:database@mydbinstance.c2mox7nvtsw7.us-west-2.rds.amazonaws.com:5432/bfa";
var client = new pg.Client(conString);
client.connect();

server.get("/users/:id", async (req, res) => {
    const {id} = req.params;
    client.query(`SELECT * FROM users WHERE users.user_id = ${id}`)
	.then(result => {
	    res.status(200).json(result.rows);
	    // process.exit();
	})
	.catch(e => {
	    res.status(404).json(e.stack);
	})
	// .then(() => client.end());
});

server.get('/users', async (req, res) => {
    client.query(`SELECT * FROM users`)
	.then(result => {
	    res.status(200).json(result.rows);
	    // process.exit();
	})
	.catch(e => {
	    res.status(404).json(e.stack);
	})
	// .then(() => client.end());
});

server.post("/users", (request, res) => {
    console.log("RB", request.body);
    const { username, paid, logged_in, email, created_at, last_login } = request.body;
    client.query(`INSERT INTO users (
    username, paid, logged_in, email, created_at, last_login)
    VALUES ($1, $2, $3, $4, $5, $6)`,[username, paid, logged_in, email, created_at, last_login ])
	.then(result => {
	    res.status(200).json(result);
	    // process.exit();
	})
	.catch(e => {
	    console.error(e.detail),
	    res.send(e)
	})
	// .then(() => client.end())
});

server.delete("/delete/:id", (request, res) => {
    const userID = parseInt(request.params.id);
    client.query('DELETE FROM users WHERE user_id = $1', [userID])
	.then(result => {
	    res.status(200).json(result);
	})
	.catch(e => {
	    console.error(e.detail), 
	    res.send(e)
	})
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
