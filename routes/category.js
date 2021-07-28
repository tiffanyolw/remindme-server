const express = require("express");
const router = express.Router();

const Category = require("./../models/category");

router.get("/", (req, res) => {
    Category.findAll().then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get categories");
    });
});

module.exports = router;
