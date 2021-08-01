const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("./../models/user");
const saltRounds = 10;

router.post("/register", (req, res) => {
    let password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        let userData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash
        }

        User.create(userData).then((result) => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not register user");
        });
    });
});

app.post("/login", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let userData = {
        where: { email }
    }

    User.findOne(userData).then((result) => {
        if (result) {
            bcrypt.compare(password, result.password, (err, output) => {
                if (output) {
                    res.send(result);
                } else {
                    res.send(400).send("Incorrect password");
                }
            });
        } else {
            res.status(404).send("User does not exist");
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

module.exports = router;