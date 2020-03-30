let jwt = require('jsonwebtoken');
let config = require('./config');
const bcrypt = require("bcryptjs");
const {User} = require('./sequelize');

module.exports = class HandlerGenerator {

    async registration(req, res, next) {
        const userFromDb = await User.findOne({where: {username: req.body.username}, raw: true});
        let token = jwt.sign({username: req.body.username, userId: req.userId},
            config.secret,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        );
        res.json({
            token: token,
            user: {
                gender: userFromDb.gender,
                username: userFromDb.username,
                birthday: userFromDb.birthday,
                commune: userFromDb.commune,
                education: userFromDb.education,
                lookingFor: userFromDb.lookingFor,
                inAge: userFromDb.inAge,
                children: userFromDb.children,
                region: userFromDb.region,
                height: userFromDb.height,
                weight: userFromDb.weight,
                avatar: userFromDb.avatar,
                role: userFromDb.role,
                statusBan: userFromDb.statusBan,
                greeting: userFromDb.greeting
            }
        })
    };

    async login(req, res) {
        const userFromDb = await User.findOne({where: {username: req.body.username}, raw: true});

        if (userFromDb) {
            const passwordResult = bcrypt.compareSync(
                req.body.password,
                userFromDb.password
            );
            if (passwordResult) {
                let token = jwt.sign({username: req.body.username, role: userFromDb.role, userId: userFromDb.id},
                    config.secret,
                    {
                        expiresIn: '24h' // expires in 24 hours
                    }
                );
                res.json({
                    token: token,
                    user: {
                        gender: userFromDb.gender,
                        username: userFromDb.username,
                        birthday: userFromDb.birthday,
                        commune: userFromDb.commune,
                        education: userFromDb.education,
                        lookingFor: userFromDb.lookingFor,
                        inAge: userFromDb.inAge,
                        children: userFromDb.children,
                        region: userFromDb.region,
                        height: userFromDb.height,
                        weight: userFromDb.weight,
                        avatar: userFromDb.avatar,
                        role: userFromDb.role,
                        statusBan: userFromDb.statusBan,
                        greeting: userFromDb.greeting,
                        favorites: userFromDb.favorites
                    }
                })
            } else {
                res.status(401).send({
                    success: false,
                    message: 'Incorrect password!',
                })
            }
        } else {
            res.status(401).send({
                success: false,
                message: 'Incorrect username!',
            })
        }
    };

};