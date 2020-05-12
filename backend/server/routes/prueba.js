const pruebaController = require('../controllers').prueba;

module.exports = (app) => {
    app.get('/api/prueba', pruebaController.cacaca);
    app.post('/api/examen', pruebaController.create);
};