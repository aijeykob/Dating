let jwt = require('jsonwebtoken');
const config = require('./config.js');
const {User} = require('./sequelize');
let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(400).json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};
let checkRoleModerAdmin = async (req, res, next) => {
    const checkUser = await User.findOne({where: {username: req.decoded.username}, raw: true});
    if (checkUser.role === 'admin' || checkUser.role === 'moder') {
        next()
    } else {
        return res.status(500).json({
            message: 'not enough rights'
        });
    }

};
let checkRoleForEdit = async (req, res, next) => {
    const checkUser = await User.findOne({where: {username: req.decoded.username}, raw: true});
    const userForUpdate = await User.findOne({where: {username: req.body.username}, raw: true});

    if (checkUser.username === userForUpdate.username) {
        delete req.body.role;
        delete req.body.statusBan;
        next()
    } else if (checkUser.role === 'moder' && userForUpdate.role !== 'admin') {
        delete req.body.role;
        next()
    } else if (checkUser.role === 'admin' && userForUpdate.role !== 'admin') {
        next()
    } else {
        return res.status(500).json({
            message: 'not enough rights'
        });
    }
};

module.exports = {
    checkToken,
    checkRoleModerAdmin,
    checkRoleForEdit
};