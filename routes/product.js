const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const Product = require("./../models/product");
const Category = require("../models/category");
const Location = require("./../models/location");
const Unit = require("./../models/unit");

router.get("/", (req, res) => {
    const query = req.query;
    let data = {};
    let where = {};

    if (query.expired === "true") {
        let today = new Date(Date.now());
        today.setHours(0, 0, 0, 0);
        where.expiryDate = {
            [Op.lt]: today
        };
    }

    if (query.expired === "false") {
        let today = new Date(Date.now());
        today.setHours(0, 0, 0, 0);
        where.expiryDate = {
            [Op.gte]: today
        };
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

    if (query.locationStoredId) {
        if (query.locationStoredId.length === 1) {
            where.locationStoredId = query.locationStoredId;
        } else {
            where.locationStoredId = {
                [Op.or]: query.locationStoredId
            };
        }
    }

    if (query.status) {
        where.status = query.status;
    }

    data.where = where;

    data.include = [
        { model: Category, as: "category" },
        { model: Location, as: "locationStored" },
        { model: Unit, as: "unit" }
    ];

    if (query.orderBy) {
        let ordering = query.ordering || "desc";
        data.order = [[query.orderBy, ordering]];
    }

    Product.findAll(data).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get products");
    });
});

router.get("/id/:id", (req, res) => {
    Product.findByPk(req.params.id).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get product");
    });
});

router.post("/add", (req, res) => {
    Product.create(req.body).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not add product");
    });
});

router.put("/update/id/:id", (req, res) => {
    Product.findByPk(req.params.id).then((result) => {
        result.name = req.body.name;
        result.quantity = req.body.quantity;
        result.unit = req.body.unit;
        result.purchaseDate = req.body.purchaseDate;
        result.expiryDate = req.body.expiryDate;
        result.category = req.body.category;
        result.locationStored = req.body.locationStored;
        result.notes = req.body.notes;
        result.daysBeforeNotify = req.body.daysBeforeNotify;
        result.status = req.body.status;

        result.save().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not update product");
        });
    }).catch(() => {
        res.status(500).send("Could not update product");
    });
});

router.delete("/delete/id/:id", (req, res) => {
    Product.findByPk(req.params.id).then((result) => {
        result.destroy().then(() => {
            res.send(result);
        }).catch(() => {
            res.status(500).send("Could not delete product");
        });
    }).catch(() => {
        res.status(500).send("Could not delete product");
    });
});

module.exports = router;