const express = require('express');

var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello, world from express');
});

let users = [
    {
	name: 'Akshay Gadkari',
	email: 'akshay.gadkari@lambdaschool.com',
	id: 0,
	paying: 0
    },
    {
	name: 'John Doe',
	email: 'jdoe@lambdaschool.com',
	id: 1,
	paying: 1
    }
];

// let nextId = 2;
server.post('/users', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = 1 + users.length;
    users.filter(n => n);
    user.paying = 0;
    users.push(user);
    res.status(201).json(users);
});

server.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if(!user) {
	res.status(404).json({message: 'User doesn\'t exist'});
    }
    else {
	Object.assign(user, req.body);
	res.status(200).json(user);
    }
});

server.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if(!user) {
	res.status(404).json({message: 'User doesn\'t exist'});
    }
    else {
	// res.json('User ID: ' + user.id + ' User name: ' + user.name);
	res.json(user);
	// res.status(200).json(user);
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
