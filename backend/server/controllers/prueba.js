const prueba = require('../models').prueba;


function cacaca(req, res) {
    prueba.findAll()
        .then(pruebas => {
            res.status(200).send({ pruebas });
        })
        .catch(err => {
            res.status(500).send({ message: "Ocurro un error al buscar los usuarios" });

        });
}

function create(req, res) {
    prueba.create(req.body)
        .then(pruebas => {
            res.status(200).send({ pruebas });

        })
        .catch(err => {
            res.status(500).send({ err });
        });
}


module.exports = {
    cacaca,
    create
};