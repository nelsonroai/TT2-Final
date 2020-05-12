const usuario = require('../models').usuario;
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

function getAll(req, res) {
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

module.exports = {
    create,
    getAll
};