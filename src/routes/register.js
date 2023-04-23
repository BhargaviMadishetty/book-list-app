const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const router = express.router();

router.post("/user/register", async (req, res) => {
    const { username, password, confirmpassword } = req.body;
    try {
        const userExists = await User.find("username");
        if (userExists) {
            res.json({
                status: 401,
                message: "User already Exists !"
            })
        } else {
            if (password === confirmpassword) {
                const newUser = await User.create();
                res.json({
                    status: 200,
                    message: "user created successfully",
                    newUser
                })
            } else {
                res.json({
                    message: "Passwords do not match !"
                });
            }
        }
    } catch (err) {
        res.json({
            status: 400,
            message: err.message
        });
    }
});

