const UserModel = require("../models/User");
const bcrypt = require('bcrypt')

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(401).json({ message: "user already exists", success: false })
        }
        const userModel = new UserModel({ name, email, password })
        bcrypt.hash(password, 10)
        await userModel.save()
        res.status(200).json({
            message: "successfull resgistered", success: true
        })
    } catch (err) {
        res.status(401).json({
            message: "internal server error", success: false
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "user not exists", success: false })
        }
        const userModel = new UserModel({ name, email, password })
        bcrypt.hash(password, 10)
        await userModel.save()
        res.status(200).json({
            message: "successfull resgistered", success: true
        })
    } catch (err) {
        res.status(401).json({
            message: "internal server error", success: false
        })
    }
}

module.exports = {
    signup,
    login

}