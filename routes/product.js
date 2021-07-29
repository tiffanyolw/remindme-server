const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const Product = require("./../models/product");

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
        where.categoryId = {
            [Op.or]: query.categoryId
        };
    }

    if (query.locationStoredId) {
        where.locationStoredId = {
            [Op.or]: query.locationStoredId
        };
    }

    if (query.status) {
        where.status = query.status;
    }

    data.where = where;

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