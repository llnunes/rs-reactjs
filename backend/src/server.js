const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');

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

app.use(express.json());
app.use(routes);
app.listen(3333);