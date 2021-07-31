const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const Category = require("../models/category");
const Unit = require("../models/unit");

const ShoppingItem = require("./../models/shoppingItem");

router.get("/", (req, res) => {
    const query = req.query;
    let data = {};
    let where = {};

    if (query.bought) {
        where.bought = (query.bought === "true");
    }

    if (query.cleared) {
        where.cleared = (query.cleared === "true");
    }

    if (query.storeName) {
        if (query.storeName.length === 1) {
            where.storeName = query.storeName;
        } else {
            where.storeName = {
                [Op.or]: query.storeName
            };
        }
    }

    if (query.categoryId) {
        if (query.categoryId.length === 1) {
            where.categoryId = query.categoryId;
        } else {
            where.categoryId = {
                [Op.or]: query.categoryId
            };
        }
    }

    data.where = where;

    data.include = [
        { model: Category, as: "itemCategory" },
        { model: Unit, as: "itemUnit" }
    ];

    if (query.orderBy) {
        let ordering = query.ordering || "desc";
        data.order = [
            [query.orderBy, ordering]
        ];
    }

    ShoppingItem.findAll(data).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get items");
    });
});

router.get("/id/:id", (req, res) => {
    ShoppingItem.findByPk(req.params.id, {
        include: [
            { model: Category, as: "itemCategory" },
            { model: Unit, as: "itemUnit" }
        ]
    }).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get item");
    });
});

router.post("/add", (req, res) => {
    ShoppingItem.create(req.body).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not add item");
    });
});

router.put("/update/id/:id", (req, res) => {
    ShoppingItem.findByPk(req.params.id).then((result) => {
        result.name = req.body.name;
        result.quantity = req.body.quantity;
        result.unit = req.body.unit;
        result.price = req.body.price;
        result.storeName = req.body.storeName;
        result.category = req.body.category;
        result.notes = req.body.notes;
        result.bought = req.body.bought;
        result.cleared = req.body.cleared;

        result.save().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not update item");
        });
    }).catch(() => {
        res.status(500).send("Could not update item");
    });
});

router.delete("/delete/id/:id", (req, res) => {
    ShoppingItem.findByPk(req.params.id).then((result) => {
        result.destroy().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not delete item");
        });
    }).catch(() => {
        res.status(500).send("Could not delete item");
    });
});

module.exports = router;