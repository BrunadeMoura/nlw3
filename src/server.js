//import dependencies
const express = require('express');
const path = require('path');
const pages = require('./pages.js');
//initiating express
const server = express();

server
    //use body from req
    .use(express.urlencoded({ extended:true}))
    //using static files (utilizando os arquivos estáticos)
    .use(express.static('public'))
    //to set up (configurar) template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //criate a rote
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage);
//turn on the server
server.listen(5550);