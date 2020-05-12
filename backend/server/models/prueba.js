module.exports = (sequelize, DataTypes) => {
    const prueba = sequelize.define('prueba', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: DataTypes.STRING,
        edad: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE



    });
    return prueba;
};