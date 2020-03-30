module.exports = (sequelize, type) => {
    return sequelize.define('favorite', {
            name: {
                type: type.STRING,

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