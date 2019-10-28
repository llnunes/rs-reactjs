const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

mongoose.Promise = global.Promise
module.exports = mongoose.connect ('mongodb://localhost/mymoney', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
})

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
})
// GET, POST, PUT, DELETE
//app.get('/users ...
//req.query.? -> Acessar os query params (para filtros)
//{idade: req.query.idade}

//app.put('/users/:id ...
//req.params.? -> Acessar route parameters (para edição e delete)
//{id: req.params.id}

//app.post('/users'
//req.body -> Acessar corpo da requisição  (para criação e edição)
// {req.body}

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
server.listen(3333);