const express = require('express');
const routes = require('./routes');

class App{
    constructor(){
        this.router = express.Router();
        this.loadRoutes();
    }

    loadRoutes(){
        this.router.use('/', routes);
        console.log("Rutas cargadas");
    }

    routes(){
        return this.router;
    }
}

module.exports = App;