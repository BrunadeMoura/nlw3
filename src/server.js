import express from 'express';
import path from 'path';
import pages from './pages.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//initiating express
const server = express();

server
    //use body from req
    .use(express.urlencoded({ extended:true}))
    //using static files (utilizando os arquivos estáticos)
    .use(express.static('public'))
    // Configure a template engine
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