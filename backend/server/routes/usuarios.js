const usuariosController = require('../controllers').usuarios;

//const md_auth = require('../authenticated/authenticated');


module.exports = (app) => {
    app.post('/api/usuario', usuariosController.create);
    //app.post('/api/login', usuariosController.login);
    app.get('/api/login', usuariosController.getAll);

    //app.get('/api/usuarios', md_auth.auth, usuariosController.getAll); //md_auth verifica que se envia el token correcto, no expirado
};