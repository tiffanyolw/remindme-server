const express = require("express");
const router = express.Router();

const Location = require("./../models/location");

router.get("/user/:userId", (req, res) => {
    Location.findAll({
        where: {
            userId: req.params.userId
        }
    }).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get locations");
    });
});

module.exports = router;
