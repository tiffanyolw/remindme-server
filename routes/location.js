const express = require("express");
const router = express.Router();

const Location = require("./../models/location");

router.get("/", (req, res) => {
    Location.findAll().then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get locations");
    });
});

module.exports = router;
