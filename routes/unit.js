const express = require("express");
const router = express.Router();

const Unit = require("./../models/unit");

router.get("/user/:userId", (req, res) => {
    Unit.findAll({
        where: {
            userId: req.params.userId
        }
    }).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get units");
    });
});

module.exports = router;
