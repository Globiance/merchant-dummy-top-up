const jwt = require('jsonwebtoken');
const InvalidToken = require('../model/invalid-token.model');

const jwtSecret = process.env.JWT_SECRET

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({
        data: null,
        message: "No token provided!"
    });

    let invalidToken = await InvalidToken.findOne({ where: { token } })

    if (invalidToken) return res.status(401).json({
        data: null,
        message: "Credentials expired! please login again"
    });

    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.status(403).json({
            data: null,
            message: "Credentials are not correct! please login again"
        });
        req.user = user;
        req.token = token
        next();
    });
};

module.exports = authenticateToken;
