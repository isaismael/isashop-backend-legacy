const express = require('express');

class App{
    constructor(){
        this.router = express.Router();
        this.loadRoutes();
    }

    loadRoutes(){
        // this.router.use('/users', require('./routes/auth/user.routes'));
        console.log("Desde app")
    }

    routes(){
        return this.router;
    }
}

module.exports = App;