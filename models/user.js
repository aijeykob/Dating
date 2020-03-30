module.exports = (sequelize, type) => {
    return sequelize.define('user', {
            username: {
                type: type.STRING,
                allowNull: false
            },
            password: {
                type: type.STRING
            },
            avatar: {
                type: type.STRING
            },
            birthday: {
                type: type.DATE
            },
            gender: {
                type: type.STRING
            },
            region: {
                type: type.STRING
            },
            weight: {
                type: type.INTEGER
            },
            height: {
                type: type.INTEGER
            },
            education: {
                type: type.STRING
            },
            greeting: {
                type: type.STRING
            },
            lookingFor: {
                type: type.STRING
            },
            inAge: {
                type: type.STRING
            },
            email: {
                type: type.STRING
            },
            children: {
                type: type.STRING
            },
            interesting: {
                type: type.STRING
            },
            commune: {
                type: type.STRING
            },
            role: {
                type: type.ENUM('admin', 'user', 'moder')
            },
            statusBan: {
                type: type.STRING
            },
            id: {
                type: type.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
        },
    );
};