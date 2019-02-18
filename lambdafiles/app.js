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
	    process.exit();
	})
	.catch(e => {
	    res.status(404).json(e.stack);
	})
	.then(() => client.end());
});

server.get('/users', async (req, res) => {
    client.query(`SELECT * FROM users`)
	.then(result => {
	    res.status(200).json(result.rows);
	    process.exit();
	})
	.catch(e => {
	    res.status(404).json(e.stack);
	})
	.then(() => client.end());
});


// const createUser = (request, response) => {
//     const { username, email } = request.body;
//     client.query('INSERT INTO users (username, email) VALUES ($1, $2)', [username, email], (error, res) => {
// 	if (error) {
// 	    throw error;
// 	}
// 	res.status(200).json(res.rows);
//     });
// };

server.post('/users', async (req, res) => {
    const {username, user_id, paid, logged_in, email, created_at, last_login} = req.params;
    //req.params or req.body?
    client.query(`INSERT INTO users(username, user_id, paid, logged_in, email, created_at, last_login) VALUES($1, $2, $3, $4, $5, $6, $7`, [username, user_id, paid, logged_in, email, created_at, last_login])
	.then(result => {
	    res.status(200).json(result.rows);
	    process.exit();
	})
	.catch(e => {
	    res.status(404).json(e.stack);
	    console.log(e.stack);
	    process.exit();
	})
	.then(() => client.end());
});


// change the request itself?
// {
//     "username": "RonaldMcDonald",
//     "email": "Ronmcd@lambdaschool.com"
// }




// server.post('/users', async (req, res) => {
//     const {username} = req.params;
//     const {email} = req.params;
//     client.query(`INSERT INTO users(username, user_id, paid, logged_in, email, created_at, last_login) VALUES($1, 4, false, false, $2, null, null`, [username, email])
// 	.then(result => {
// 	    res.status(200).json(result.rows);
// 	    process.exit();
// 	})
// 	.catch(e => {
// 	    res.status(404).json(e.stack);
// 	    console.log(e.stack);
// 	    process.exit();
// 	})
// 	.then(() => client.end());
// });

// client.query('SELECT * FROM users WHERE users.user_id = "1"')








// let users = [
//     {
// 	name: 'Akshay Gadkari',
// 	email: 'akshay.gadkari@lambdaschool.com',
// 	id: 0,
// 	paying: 0
//     },
//     {
// 	name: 'John Doe',
// 	email: 'jdoe@lambdaschool.com',
// 	id: 1,
// 	paying: 1
//     }
// ];

// server.get('/api/users', (req, res) => {
//     db('users').then(users => {
// 	res.status(200).json(users);
//     })
// 	.catch(err => res.status(500).json(err));
// });

// let nextId = 2;
// server.post('/users', (req, res) => {
//     console.log(req.body);
//     const user = req.body;
//     user.id = 1 + users.length;
//     users.filter(n => n);
//     user.paying = 0;
//     users.push(user);
//     res.status(201).json(users);
// });

// server.put('/users/:id', (req, res) => {
//     const user = users.find(u => u.id == req.params.id);
//     if(!user) {
// 	res.status(404).json({message: 'User doesn\'t exist'});
//     }
//     else {
// 	Object.assign(user, req.body);
// 	res.status(200).json(user);
//     }
// });

// server.get('/users/:id', (req, res) => {
//     const user = users.find(u => u.id == req.params.id);
//     if(!user) {
// 	res.status(404).json({message: 'User doesn\'t exist'});
//     }
//     else {
// 	res.json(user);
//     }
// });

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');

