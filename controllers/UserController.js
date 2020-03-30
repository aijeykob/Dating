const Sequelize = require('sequelize');
const bcrypt = require("bcryptjs");
const {User} = require('../sequelize');
const {Favorite} = require('../sequelize');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

const indexLimit = 6;
const inclusiveYear = 1; //for max range of year

const minDataSearch = (number) => {
    return new Date(moment().subtract(number, 'year'));
};
const maxDataSearch = (number) => {
    return new Date(moment().subtract(number + inclusiveYear, 'year'));
};

exports.registration = async function (req, res, next) {
    const userFromDb = await User.findOne({where: {username: req.body.username}, raw: true});

    if (userFromDb) {
        res.status(400).send({
            status: false,
            text: "This user already exist"
        })
    } else {
        try {
            const salt = bcrypt.genSaltSync(10);
            const password = req.body.password;
            const formattedBirthday = moment(`${req.body.year}-${req.body.month}-${req.body.day}`).format();
            const createdUser = await User.create({
                username: req.body.username,
                password: bcrypt.hashSync(password, salt),
                birthday: formattedBirthday,
                gender: req.body.gender,
                lookingFor: req.body.lookingFor,
                inAge: req.body.inAge,
                region: req.body.region,
                email: req.body.email,
                education: req.body.education,
                children: req.body.children,
                commune: req.body.commune,
                role: 'user',
                statusBan: 'false',
            });
            req.userId = createdUser.id;
            fs.mkdir(path.join(`public/usersPhotos/${createdUser.id}`), function (err) {
            });
            next()
        } catch (err) {
            console.log(err);
            res.status(400).json({
                text: err
            })
        }
    }
};

exports.viewProfile = async function (req, res) {
    try {
        const userFromDb = await User.findOne({
            where: {username: req.decoded.username},
            attributes: {exclude: ["password", "createdAt", "updatedAt"]},
            raw: true
        });
        userFromDb.favorites = [];
        const favorites = await Favorite.findAll({
            where: {userId: req.decoded.userId},
            attributes: ['name'],
            raw: true
        });
        favorites.map(el => {
            userFromDb.favorites.push(el.name)
        });
        res.json({
            ...userFromDb
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            text: err
        })
    }
};
exports.setFavorite = async function (req, res) {
    if (req.body.data.payload.action === 'set') {
        const favorite = await Favorite.create({
            userId: req.decoded.userId,
            name: req.body.data.payload.name
        });
        res.json({favorite})
    } else if (req.body.data.payload.action === 'unset') {
        await Favorite.destroy({
            where: {
                userId: req.decoded.userId,
                name: req.body.data.payload.name,

            }
        });
    }
};
exports.searchProfiles = async function (req, res) {
    const Op = Sequelize.Op;
    let additionalFilters = {};
    const allowedParameters = ['username', 'commune', 'education'];
    for (let key in req.body) {
        if (key === 'height') {
            additionalFilters.height = {
                [Op.between]: [req.body.height.min, req.body.height.max]
            }
        } else if (key === 'weight') {
            additionalFilters.weight = {
                [Op.between]: [req.body.weight.min, req.body.weight.max]
            }
        } else if (key === 'inAge') {
            additionalFilters.birthday = {
                [Op.between]: [maxDataSearch(req.body.inAge.max), minDataSearch(req.body.inAge.min)]
            }
        }
        if (allowedParameters.includes(key) && req.body[key]) {
            additionalFilters[key] = req.body[key]
        }
    }
    try {
        const usersFromDb = await User.findAndCountAll({
            where: {...additionalFilters},
            attributes: {exclude: ["password", "createdAt", "updatedAt"]},
            limit: 6, offset: req.body.offset * indexLimit, raw: true
        });
        res.json({
            usersFromDb,
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            text: err
        })
    }
};

exports.searchAllProfiles = async function (req, res) {

    try {
        const usersFromDb = await User.findAndCountAll({
            limit: 6, offset: req.body.offset * indexLimit, raw: true
        });
        res.json({
            usersFromDb,
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            text: err
        })
    }
};

exports.editProfile = async function (req, res) {
    let paramsForUpdate = {};
    const allowedParameters = ['region', 'weight', 'height', 'education', 'greeting', 'lookingFor', 'birthday',
        'gender', 'inAge', 'email', 'children', 'interesting', 'commune', 'role', 'statusBan',];
    for (let key in req.body) {
        if (allowedParameters.includes(key) && req.body[key]) {
            paramsForUpdate[key] = req.body[key]
        }
    }
    try {
        const userFromDb = await User.update({
            ...paramsForUpdate
        }, {
            where: {
                username: req.body.username
            },
            //     attributes: {exclude: ["password", "createdAt", "updatedAt"],
            returning: true, raw: true
        });
        delete userFromDb[1][0].password;
        delete userFromDb[1][0].createdAt;
        delete userFromDb[1][0].updatedAt;
        res.json(userFromDb[1][0])
    } catch (err) {
        console.log(err);
        res.status(500).json({
            text: err
        })
    }
};

