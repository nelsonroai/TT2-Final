module.exports = (sequelize, DataTypes) => {
    const usuarios = sequelize.define('usuario', {
        cod_rut: {

            primaryKey: true,
            type: DataTypes.STRING
        },

        cod_rol: DataTypes.INTEGER,
        nom1_academico: DataTypes.STRING,
        nom2_academico: DataTypes.STRING,
        ap1_academico: DataTypes.STRING,
        ap2_academico: DataTypes.STRING,
        cod_esc: DataTypes.INTEGER,
        cod_dpto: DataTypes.INTEGER,
        cod_facultad: DataTypes.INTEGER,
        fianza: DataTypes.INTEGER,
        telefono: DataTypes.STRING,
        email: DataTypes.STRING,
        email2: DataTypes.STRING,
        password: DataTypes.STRING,
        estado: DataTypes.INTEGER,
        ingresos: DataTypes.INTEGER,
        usuario_creacion: DataTypes.STRING
            //createdAt: DataTypes.DATE,
            //updatedAt: DataTypes.DATE


    }, {
        freezeTableName: true,
        timestamps: false,
        tableName: 'usuario'

    });
    return usuarios;
};