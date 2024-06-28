const User = require("../model/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const InvalidToken = require("../model/invalid-token.model");
const Wallet = require("../model/wallet.model");
const jwtSecret = process.env.JWT_SECRET

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({
                data: null,
                message: "User already exists!"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword })
        await Wallet.create({ userId: user.id, amount: '0' })
        user.password = undefined
        const token = jwt.sign({ userId: user.id, email: user.email, name: user.name }, jwtSecret, { expiresIn: '10d' });
        return res.json({ data: { user, token }, message: 'User registered successfully!' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            data: null,
            message: "Internal server error! please try again"
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) res.status(401).json({
            data: null,
            message: "Email and password are required!"
        });
        const user = await User.findOne({ where: { email } })
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user.id, email: user.email, name: user.name }, jwtSecret, { expiresIn: '10d' });
            user.password = undefined
            return res.json({ data: { user, token }, message: 'User logged in successfully!' });

        } else {
            res.status(401).json({
                data: null,
                message: "Wrong Credentials! please try again"
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            data: null,
            message: "Internal server error! please try again"
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        let token = req.token

        let invalidToken = await InvalidToken.findOne({ where: { token } })

        if (invalidToken) return res.status(409).json({
            data: null,
            message: "Already logged out!"
        });

        await InvalidToken.create({ token })

        return res.json({
            data: null,
            message: "Logged out successfully!"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            data: null,
            message: "Internal server error! please try again"
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};