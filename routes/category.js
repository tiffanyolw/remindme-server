const express = require("express");
const router = express.Router();

const Category = require("./../models/category");

router.get("/user/:userId", (req, res) => {
    Category.findAll({
        where: {
            userId: req.params.userId
        }
    }).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get categories");
    });
});

module.exports = router;
