const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const App = require('./api/api');
const sequelize = require('./api/config/connect');

dotenv.config();
require('./api/models/index');

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
        this.app.use(cors());
        this.app.use("/api/uploads", express.static("api/uploads"));
    }

    routes() {
        this.app.use('/api', this.appInstance.routes());
    }

    async start() {
        try {
            await sequelize.authenticate();
            console.log('SQLite conectada');

            await sequelize.sync();
            console.log('Tablas sincronizadas');

            this.app.listen(this.port, () => {
                console.log(`Servidor corriendo en http://localhost:${this.port}`);
            });

        } catch (error) {
            console.error('Error iniciando el servidor:', error);
            process.exit(1);
        }
    }
}

const server = new Server();
server.start();