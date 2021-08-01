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
    let where = {
        userId: req.query.userId
    };

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
            [Op.or]: {
                [Op.gte]: today,
                [Op.eq]: null
            }
        };
    }

    if (query.categoryId) {
        where.categoryId = query.categoryId;
    }

    if (query.locationStoredId) {
        where.locationStoredId = query.locationStoredId;
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
        data.order = [
            [query.orderBy, ordering]
        ];
    }

    Product.findAll(data).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get products");
    });
});

router.get("/id/:id", (req, res) => {
    Product.findByPk(req.params.id, {
        include: [
            { model: Category, as: "category" },
            { model: Location, as: "locationStored" },
            { model: Unit, as: "unit" }
        ]
    }).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get product");
    });
});

router.get("/expiring", (req, res) => {
    let data = {};
    let where = {
        userId: req.query.userId
    };

    if (req.query.expiringIn) {
        let today = new Date(Date.now());
        today.setHours(0, 0, 0, 0);

        let after = new Date(Date.now());
        after.setHours(0, 0, 0, 0);
        after.setDate(today.getDate() + parseInt(req.query.expiringIn) + 1);

        where.expiryDate = {
            [Op.lt]: after,
            [Op.gte]: today
        };

        data.where = where;
    }

    Product.findAll(data).then((result) => {
        res.send(result);
    }).catch(() => {
        res.status(500).send("Could not get products");
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
        result.quantityConsumed = req.body.quantityConsumed;
        result.quantityTrashed = req.body.quantityTrashed;
        result.unitId = req.body.unitId;
        result.purchaseDate = req.body.purchaseDate;
        result.expiryDate = req.body.expiryDate;
        result.categoryId = req.body.categoryId;
        result.locationStoredId = req.body.locationStoredId;
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