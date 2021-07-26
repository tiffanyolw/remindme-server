const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const Product = require("./../models/product");

router.get("/", (req, res) => {
    const body = req.body;
    let data = {};
    let where = {};

    if (body.expired) {
        let today = new Date(Date.now());
        today.setHours(0, 0, 0, 0);
        where.expiryDate = {
            [Op.lt]: today
        }
    }

    if (body.expired === false) {
        let today = new Date(Date.now());
        today.setHours(0, 0, 0, 0);
        where.expiryDate = {
            [Op.gte]: today
        }
    }

    if (body.categories) {
        where.category = {
            [Op.or]: body.categories
        }
    }

    if (body.locations) {
        where.locationStored = {
            [Op.or]: body.locations
        }
    }

    if (body.status) {
        where.status = body.status;
    }

    data.where = where;

    if (body.order) {
        data.order = body.order;
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