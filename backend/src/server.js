const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise
module.exports = mongoose.connect ('mongodb://localhost/mymoney', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


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
app.listen(3333);