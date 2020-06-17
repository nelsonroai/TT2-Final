const proyectoController = require('../controllers').proyecto;

//const md_auth = require('../authenticated/authenticated');


module.exports = (app) => {


    app.get('/api/listprogramas', proyectoController.listarprogramas); //Listar proyectos, configurado para 3 por efectos de rapidez
    app.get('/api/listprogramasejecucion', proyectoController.listarprogramasejecucion); // Listar proyectos en ejecucion
    app.post('/api/crearproyecto', proyectoController.create); //Crea nuevo proyecto
    app.put('/api/actProyecto/:cod_proyecto', proyectoController.update); //editar proyecto ya existente ingresando el codigo del proyecto. Si no existe no puede actualizar
    app.get('/api/countprogramasejecucion', proyectoController.NumProgramasEjecucion); //Cantidad de programas en ejecucion
    app.get('/api/countprogramasaprobados', proyectoController.NumProgramasAprobados); //Cantidad de programas aprobados
    app.get('/api/counttotalejecucion', proyectoController.NumTotalEjecucion);
    app.get('/api/counttotalaprobados', proyectoController.NumTotalAprobados);
    //app.post('/api/login', usuariosController.login);
    //app.get('/api/proyectos', usuariosController.getAll);

    //app.get('/api/usuarios', md_auth.auth, usuariosController.getAll); //md_auth verifica que se envia el token correcto, no expirado
};