const usuario = require('../models').usuarios;
//const jwt = require('../services/jws');

function create(req, res) {
    usuario.create(req.body)
        .then(usuarios => {
            res.status(200).send({ usuarios });

        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function busquedaporrut(req, res) {
    const params = req.body;
    const cod_rut = params.cod_rut;

    usuario.findOne({
            where: { cod_rut: cod_rut }
        })
        .then(usuarios => {
            res.status(200).send({ usuarios });
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurro un error al buscar los usuarios" });

        });
}

function login(req, res) {

    usuario.findOne({
            where: {
                cod_rut: req.body.cod_rut,
                password: req.body.password
            }
        })
        .then(usuarios => {
            if (usuarios) {
                res.status(200).send({ usuarios });
            } else {
                res.status(401).send({ message: "Usuario y/o contraseña incorrectos" });
            }


        })
        .catch(err => {
            res.status(500).send({ message: "Ocurro un error al buscar los usuarios" });

        });
}

function update(req, res) {

    var cod_rut = req.params.cod_rut;
    var body = req.body;

    usuario.findOne({
            where: {
                cod_rut: cod_rut,
            }

        })
        .then(usuarios => {
            console.log(body);
            usuarios.update(body)
                .then(() => {
                    res.status(200).send({ usuarios });
                })
                .catch(err => {
                    res.status(500).send({ message: "Error al actualizar la el usuario" });
                });
        })
        .catch(err => {
            res.status(500).send({ message: "Errorrrrrrrrrrrrrr" });

        });
}

module.exports = {
    create,
    busquedaporrut,
    login,
    update
};