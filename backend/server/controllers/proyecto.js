const prueba = require('../models').proyecto;

function create(req, res) {
    proyecto.create(req.body)
        .then(proyectos => {
            res.status(200).send({ proyectos });

        })
        .catch(err => {
            res.status(500).send({ err });
        });
}


module.exports = {
    create
};