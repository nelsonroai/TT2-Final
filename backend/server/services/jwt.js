var nJwt = require('njwt');
var config = require('../config/config.json');
var secret = config.token_secret;

exports.createToken = (usuario) => {
    var params = {
        sub: usuario.cod_rut,
        usuario: usuario.nom1_academico,
        apellido: usuario.ap1_academico
    };
    var jwt = nJwt.create(params, secret);
    var t = new Date();
    t.setHours(t.getHours() + 2);
    jwt.setExpiration(t);
    var token = jwt.compact();

    return token;
};