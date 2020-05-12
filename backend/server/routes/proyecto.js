const proyectoController = require('../controllers').proyecto;

//const md_auth = require('../authenticated/authenticated');


module.exports = (app) => {
    app.post('/api/proyecto', proyectoController.create);
    //app.post('/api/login', usuariosController.login);
    //app.get('/api/proyectos', usuariosController.getAll);

    //app.get('/api/usuarios', md_auth.auth, usuariosController.getAll); //md_auth verifica que se envia el token correcto, no expirado
};