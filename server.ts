import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import utility from "./module/utility";
import api from './module/api';

const server = express();

// middleware
server.use(bodyParser.json());

// api
server.get('/', (request, response) => {
    const html = fs.readFileSync(path.resolve(__dirname, "./web/login.html"));
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
});

server.use('/api', api);

server.listen(8080, () => utility.print('Server listening on port 8080...'));
