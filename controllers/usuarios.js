const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const {q, nombre="No name",apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body
    console.log(nombre,edad);
    res.json({
        msg: 'Post API - controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params
    res.json({
        msg: 'put API - controlador ',
        id
    });
}


const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,

}