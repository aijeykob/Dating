const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const PhotoModel = require('./models/photo');
const FavoriteModel = require('./models/favorite');

const sequelize = new Sequelize('postgres', 'postgres', 'Butd2J8K', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = UserModel(sequelize, Sequelize);
const Photo = PhotoModel(sequelize, Sequelize);
const Favorite = FavoriteModel(sequelize, Sequelize);
User.hasMany(Photo);
User.hasMany(Favorite);
sequelize.sync(
    // {force: true}
)
    .then(() => {
        console.log(`Database & tables created!`)
    });

module.exports = {
    User,
    Photo,
    Favorite
};