module.exports = (sequelize, type) => {
    return sequelize.define('photo', {
            name: {
                type: type.STRING,

            },
            url: {
                type: type.STRING
            },
            id: {
                type: type.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
        }
    );
};