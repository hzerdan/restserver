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
            // res.status(403).json({
            res.json({
                    ok:true,
                msg: 'get API'
            })
          });

        this.app.put('/api',  (req, res) => {
        res.status(201).json({
            msg: 'put API'
            })
        });


        this.app.post('/api',  (req, res) => {
            res.status(300).json({
                msg: 'post API'
                })
            });

            
        this.app.delete('/api',  (req, res) => {
            res.status(404).json({
                msg: 'delete API'
                })
        });
        
        this.app.patch('/api',  (req, res) => {
            res.status(500).json({
                msg: 'delete API'
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