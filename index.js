const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const App = require('./api/api');

dotenv.config();

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3014;
        this.appInstance = new App();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        }))
    }

    routes() {
        this.app.use('/api', this.appInstance.routes());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}...`)
        })
    }

}

const server = new Server();
server.listen();
