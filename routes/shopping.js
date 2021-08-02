const express = require("express");
const router = express.Router();

const ShoppingItem = require("./../models/shoppingItem");
const Category = require("../models/category");
const Unit = require("../models/unit");

router.get("/user/:userId", (req, res) => {
    const query = req.query;
    let data = {};
    let where = {
        userId: req.params.userId
    };

    if (query.bought) {
        where.bought = (query.bought === "true");
    }

    if (query.cleared) {
        where.cleared = (query.cleared === "true");
    }

    if (query.storeName) {
        where.storeName = query.storeName;
    }

    if (query.categoryId) {
        where.categoryId = query.categoryId;
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

router.get("/user/:userId/id/:id", (req, res) => {
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

router.post("/user/:userId/add", (req, res) => {
    req.body.userId = req.params.userId;
    ShoppingItem.create(req.body).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not add item");
    });
});

router.put("/user/:userId/update/id/:id", (req, res) => {
    ShoppingItem.findByPk(req.params.id).then((result) => {
        result.name = req.body.name;
        result.quantity = req.body.quantity;
        result.unitId = req.body.unitId;
        result.price = req.body.price;
        result.storeName = req.body.storeName;
        result.categoryId = req.body.categoryId;
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

router.delete("/user/:userId/delete/id/:id", (req, res) => {
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