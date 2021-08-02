const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

const User = require("./../models/user");
const saltRounds = 10;

router.post("/register", (req, res) => {
    let password = req.body.password;

    if (password.length < 6) {
        res.status(500).send("Could not register user");
        return;
    }

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

router.post("/login", (req, res) => {
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
                    res.status(400).send("Incorrect password");
                }
            });
        } else {
            res.status(404).send("User does not exist");
        }
    }).catch(() => {
        res.status(500).send("Could not log in");
    });
});

router.patch("/update/user/:id", (req, res) => {
    User.findByPk(req.params.id).then((result) => {
        result.firstName = req.body.firstName;
        result.lastName = req.body.lastName;
        result.email = req.body.email;

        result.save().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not update user");
        });
    }).catch(() => {
        res.status(500).send("Could not update user");
    });
});

router.patch("/update-password/user/:id", (req, res) => {
    let id = req.params.id;
    let newPassword = req.body.newPassword;
    let currentPassword = req.body.currentPassword;

    if (newPassword.length < 6) {
        res.status(500).send("Could not update password");
        return;
    }

    User.findByPk(id).then((result) => {
        if (result) {
            bcrypt.compare(currentPassword, result.password, (err, output) => {
                if (output) {
                    bcrypt.hash(newPassword, saltRounds, (err, hash) => {
                        result.password = hash;

                        result.save().then(() => {
                            res.send(result);
                        }).catch(() => {
                            res.status(500).send("Could not update password");
                        });
                    });
                } else {
                    res.status(400).send("Incorrect password");
                }
            });
        } else {
            res.status(400).send();
        }
    }).catch(() => {
        res.status(500).status("Could not update password");
    });
});

module.exports = router;