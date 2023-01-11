const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model');

async function auth(req, res, next) {

    let authorization = req.headers.authorization;

    if (authorization) {
        let token = authorization.split(' ').pop();
        try {

            if (token) {
                jwt.verify(token, process.env.JWT_SECRET_KEY);
                const userId = jwt.decode(token);
                const user = await UserModel.findById(userId);
                req.user = user;
                next();
            }

        } catch (err) {
            return res.status(400).send({
                error: 'Invalid token provided' + err.message
            })
        }
    } else {
        return res.status(400).send({
            error: 'No token provided' 
        })
    }
}

module.exports = auth;