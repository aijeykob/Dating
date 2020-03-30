const {Photo} = require('../sequelize');
const {User} = require('../sequelize');
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const imageTypes = ["image/png", "image/jpg", "image/jpeg"];

exports.upload = async function (req, res) {
    const dateNow = Date.now();
    let imageFile = req.files.file;
    const extension = path.extname(req.files.file.name);
    try {
        if (imageTypes.includes(imageFile.mimetype)) {
            await Photo.create({
                userId: req.decoded.userId,
                url: `public/usersPhotos/${req.decoded.userId}/${dateNow + extension}`,
                name: dateNow + extension
            });
            imageFile.mv(path.join(`public/usersPhotos/${req.decoded.userId}/${dateNow + extension}`), function (err) {
                if (err) {
                    return res.status(500).json({
                        text: err
                    })
                }
                res.json({url: `public/usersPhotos/${req.decoded.userId}/${dateNow + extension}`});
            });

        } else {
            return res.status(500).json({
                message: "Unrecognized image file format"
            });
        }
    } catch (err) {
        res.status(500).json({
            text: err
        })
    }
};

exports.deleteImage = async function (req, res) {
    try {
        const user = await User.findByPk(req.decoded.userId);
        if (user.avatar === req.body.data) {
            await User.update({avatar: null}, {
                where: {
                    id: req.decoded.userId
                },
            },);
        }
        await Photo.destroy({
            where: {
                url: req.body.data
            }
        });
        fs.unlink(path.join(`${req.body.data}`), function (err) {
            if (err) throw err;
            res.json({url: req.body.data})
        });
    } catch (err) {
        res.status(500).json({
            text: err
        })
    }
};

exports.avatarImage = async function (req, res) {

    try {
        await User.update({avatar: req.body.data}, {
            where: {
                id: req.decoded.userId
            }, raw: true
        },);
        res.json({
            avatar: req.body.data
        })
    } catch (err) {
        res.status(500).json({
            text: err
        })
    }

};


exports.viewImages = async function (req, res) {
    const user = await User.findByPk(req.decoded.userId);
    if (!user) {
        return res.send(404).json({
            success: false,
            message: 'user not found'
        });
    }
    try {
        const PhotosFromDb = await Photo.findAll({where: {userId: req.decoded.userId}, attributes: ['url'], raw: true});
        res.json({PhotosFromDb})
    } catch (err) {
        res.status(500).json({
            text: err
        })
    }

};

exports.userAlbum = async function (req, res) {
    try {
        const PhotosFromDb = await Photo.findAll({where: {userId: req.query.id}, attributes: ['url'], raw: true});
        res.json({PhotosFromDb})
    } catch (err) {
        res.status(500).json({
            text: err
        })
    }

};
exports.randomImages = async function (req, res) {
    console.log('in random');
    try {
        const PhotosFromDb = await Photo.findAll({
            order: Sequelize.literal('random()'),
            limit: 20,
            attributes: ['url'],
            raw: true
        });
        res.json({PhotosFromDb})
    } catch (err) {
        console.log(err);
        res.status(500).json({
            text: err
        })
    }

};