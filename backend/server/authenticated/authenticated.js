var nJwt = require('njwt');
var config = require('../config/config.json');
var secret = config.token_secret;


function auth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: "La peticion no tiene la cabecera de autenticacion" });
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');
    var payload = nJwt.verify(token, secret, (err, verifiedJwt) => {
        if (err) {
            return res.status(401).send({ message: "Acceso denegado" });
        } else {
            next();
        }
    });
}

module.exports = {
    auth
};