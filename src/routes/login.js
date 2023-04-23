//const express = require('express');
const mongodb = require('momgoose');
const User = require('../models/user');
const express = require('express');
const router = express.router();


router.get("/user/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExists = await User.find("username");
        if (userExists) {
            res.json({
                status: 200,
                message: "login successful"
            });
        } else {
            res.json({
                status: 400,
                message: "User not found, Please register to continue"
            });
        }
    } catch (err) {
        res.json({
            status: 400,
            message: err.message
        });
    }
});