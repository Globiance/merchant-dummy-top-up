const User = require("../model/user.model");

async function register(req, res) {
    try {
        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: 'anything'
        })

        return res.json(user)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    register
}