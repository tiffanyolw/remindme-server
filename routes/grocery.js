const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const Grocery = require("./../models/grocery");

router.get("/", (req, res) => {
    const body = req.body;
    let data = {};
    let where = {};

    if (body.bought !== undefined) {
        where.bought = body.bought;
    }

    if (body.stores) {
        where.storeName = {
            [Op.or]: body.stores
        };
    }

    if (body.categories) {
        where.category = {
            [Op.or]: body.categories
        };
    }

    data.where = where;

    if (body.order) {
        data.order = body.order;
    }

    Grocery.findAll(data).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get groceries");
    });
});

router.post("/add", (req, res) => {
    Grocery.create(req.body).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not add grocery");
    });
});

router.put("/update/id/:id", (req, res) => {
    Grocery.findByPk(req.params.id).then((result) => {
        result.name = req.body.name;
        result.quantity = req.body.quantity;
        result.unit = req.body.unit;
        result.price = req.body.price;
        result.storeName = req.body.storeName;
        result.category = req.body.category;
        result.notes = req.body.notes;
        result.bought = req.body.bought;

        result.save().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not update grocery");
        });
    }).catch(() => {
        res.status(500).send("Could not update grocery");
    });
});

router.delete("/delete/id/:id", (req, res) => {
    Grocery.findByPk(req.params.id).then((result) => {
        result.destroy().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not delete grocery");
        });
    }).catch(() => {
        res.status(500).send("Could not delete grocery");
    });
});

module.exports = router;