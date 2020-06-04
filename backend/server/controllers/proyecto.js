const proyecto = require('../models').proyecto;

function create(req, res) {
    proyecto.create(req.body)
        .then(proyectos => {
            res.status(200).send({ proyectos });

        })
        .catch(err => {
            res.status(500).send({ err });
        });
}


function listarproyectos(req, res) {

    proyecto.findAndCountAll({ limit: 3 })
        .then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });

        });
}

function update(req, res) {

    var cod_proyecto = req.params.cod_proyecto;
    var body = req.body;
    proyecto.findOne({
            where: {
                cod_proyecto: cod_proyecto
            }
        })
        .then(proyecto => {
            proyecto.update(body)
                .then(() => {
                    res.status(200).send({ proyecto });
                })
                .catch(err => {
                    res.status(500).send({ message: "Error al actualizar la el usuario" });
                });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

module.exports = {
    create,
    listarproyectos,
    update
};