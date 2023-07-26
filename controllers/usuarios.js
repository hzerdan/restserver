const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
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
    res.json({
        msg: 'put API - controlador'
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