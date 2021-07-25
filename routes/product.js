const express = require("express");
const router = express.Router();

const Product = require("./../models/product");

router.get("/", (req, res) => {
    let data = {};

    let queries = {};
    if (req.query.status) {
        queries.status = req.query.status;
    }
    if (req.query.category) {
        queries.category = req.query.category;
    }
    if (req.query.locationStored) {
        queries.locationStored = req.query.locationStored;
    }
    data.where = queries;

    if (req.query.orderBy) {
        let ordering = req.query.order || "DESC";
        data.order = [[req.query.orderBy, ordering]];
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