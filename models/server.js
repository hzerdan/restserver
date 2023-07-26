const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.puerto = process.env.PORT;

        // Middlewares
        this.middlewares();



        // Rutas de mi aplicación
        this.routes();

    }


    middlewares() {
        //directorio publico
        this.app.use( express.static('public'));

    }

    routes() {

        this.app.get('/api',  (req, res) => {
            res.status(403).json({
                ok:true,
                msg: 'get API'
            })
          });

        }

    listen() {

        this.app.listen(this.puerto, () => {
            console.log(`Servidor escuchando en puerto ${this.puerto}`.bgBlue)
        });

    }

}



module.exports = Server