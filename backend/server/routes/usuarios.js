const usuariosController = require('../controllers').usuarios;
const md_auth = require('../authenticated/authenticated');


module.exports = (app) => {
    app.post('/api/usuario', md_auth.auth, usuariosController.create); //crea un nuevo usuario
    app.get('/api/listusuarios', md_auth.auth, usuariosController.listarusuarios); //muestra todos los usuarios
    app.get('/api/busquedaporrut', usuariosController.busquedaporrut); //busca segun el rut ingresado todos los datos del usuario
    app.post('/api/login', usuariosController.login); //para el acceso, login
    app.put('/api/actUsuario/:cod_rut', usuariosController.update); // editar usuario ya existente, ingresando el rut






    //app.post('/api/login', usuariosController.login);
    //app.get('/api/usuarios', md_auth.auth, usuariosController.getAll); //md_auth verifica que se envia el token correcto, no expirado
};