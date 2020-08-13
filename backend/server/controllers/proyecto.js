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


function listarprogramas(req, res) {

    proyecto.findAndCountAll({
            where: {
                tipo_proy: [4, 5]
            },
            order: [
                ['cod_proyecto', 'DESC']
            ],
            limit: 20
        })
        .then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function listarprogramasejecucion(req, res) {

    proyecto.findAndCountAll({
            where: {
                tipo_proy: [4, 5],
                cod_estado: 6
            },
            order: [
                ['cod_proyecto', 'DESC']
            ],
            limit: 20
        })
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

function NumProgramasEjecucion(req, res) {
    proyecto.findAndCountAll({
            where: {
                tipo_proy: [4, 5],
                cod_estado: 6
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumProgramasAprobados(req, res) {
    proyecto.findAndCountAll({
            where: {
                tipo_proy: [4, 5],
                cod_estado: 5
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumTotalEjecucion(req, res) {
    proyecto.findAndCountAll({
            where: {
                cod_estado: 6
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumTotalAprobados(req, res) {
    proyecto.findAndCountAll({
            where: {
                cod_estado: 5
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumTotalAgendar(req, res) {
    proyecto.findAndCountAll({
            where: {
                cod_estado: 4
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumTotalFinalizado(req, res) {
    proyecto.findAndCountAll({
            where: {
                cod_estado: 7
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumTotalNorealizado(req, res) {
    proyecto.findAndCountAll({
            where: {
                cod_estado: 8
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function listarproyectos(req, res) {

    proyecto.findAndCountAll({
            where: {
                tipo_proy: [1, 2, 3, 6]
            },
            order: [
                ['cod_proyecto', 'DESC']
            ],
            limit: 20
        })
        .then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function listarproyectosejecucion(req, res) {

    proyecto.findAndCountAll({
            where: {
                tipo_proy: [1, 2, 3, 6],
                cod_estado: 6
            },
            order: [
                ['cod_proyecto', 'DESC']
            ],
            limit: 20
        })
        .then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumProyectosEjecucion(req, res) {
    proyecto.findAndCountAll({
            where: {
                tipo_proy: [1, 2, 3, 6],
                cod_estado: 6
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumProyectosAprobados(req, res) {
    proyecto.findAndCountAll({
            where: {
                tipo_proy: [1, 2, 3, 6],
                cod_estado: 5
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function listariniciativas(req, res) {

    proyecto.findAndCountAll({
            where: {
                tipo_proy: [0]
            },
            order: [
                ['cod_proyecto', 'DESC']
            ],
            limit: 20
        })
        .then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumIniciativasEjecucion(req, res) {
    proyecto.findAndCountAll({
            where: {
                tipo_proy: [0],
                cod_estado: 6
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function NumIniciativasAprobados(req, res) {
    proyecto.findAndCountAll({
            where: {
                tipo_proy: [0],
                cod_estado: 5
            },
            attributes: [

                proyecto.sequelize.fn('count',
                    proyecto.sequelize.col('cod_estado')
                )

            ]
        }).then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}

function listariniciativasejecucion(req, res) {

    proyecto.findAndCountAll({
            where: {
                tipo_proy: [0],
                cod_estado: 6
            },
            order: [
                ['cod_proyecto', 'DESC']
            ],
            limit: 20
        })
        .then(proyectos => {
            res.status(200).send({ proyectos });
        })
        .catch(err => {
            res.status(500).send({ err });
        });
}
module.exports = {
    create,
    listarprogramas,
    update,
    listarprogramasejecucion,
    NumProgramasEjecucion,
    NumProgramasAprobados,
    NumTotalEjecucion,
    NumTotalAprobados,
    NumTotalAgendar,
    NumTotalFinalizado,
    NumTotalNorealizado,
    listarproyectos,
    listarproyectosejecucion,
    NumProyectosEjecucion,
    NumProyectosAprobados,
    listariniciativas,
    NumIniciativasEjecucion,
    NumIniciativasAprobados,
    listariniciativasejecucion
};