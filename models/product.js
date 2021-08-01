const Sequelize = require("sequelize");
const config = require("./../configurations/config");
const Category = require("./category");
const Location = require("./location");
const Unit = require("./unit");
const User = require("./user");

const Product = config.define("Product", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    unitId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    quantity: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    quantityConsumed: {
        type: Sequelize.DECIMAL(10, 2),
        default: 0,
        allowNull: false
    },
    quantityTrashed: {
        type: Sequelize.DECIMAL(10, 2),
        default: 0,
        allowNull: false
    },
    purchaseDate: {
        type: Sequelize.DATE
    },
    expiryDate: {
        type: Sequelize.DATE
    },
    categoryId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    locationStoredId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    notes: {
        type: Sequelize.STRING
    },
    daysBeforeNotify: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.ENUM,
        values: ["ready", "consumed", "trashed"],
        defaultValue: "ready",
        allowNull: false
    }
});

Product.belongsTo(Category, {
    foreignKey: {
        name: "categoryId",
        defaultValue: 1,
        allowNull: false
    },
    as: "category"
});

Category.hasMany(Product, {
    foreignKey: {
        name: "categoryId",
        defaultValue: 1,
        allowNull: false
    },
    as: "category"
});

Product.belongsTo(Location, {
    foreignKey: {
        name: "locationStoredId",
        defaultValue: 1,
        allowNull: false
    },
    as: "locationStored"
});

Location.hasMany(Product, {
    foreignKey: {
        name: "locationStoredId",
        defaultValue: 1,
        allowNull: false
    },
    as: "locationStored"
});

Product.belongsTo(Unit, {
    foreignKey: {
        name: "unitId",
        defaultValue: 1,
        allowNull: false
    },
    as: "unit"
});

Unit.hasMany(Product, {
    foreignKey: {
        name: "unitId",
        defaultValue: 1,
        allowNull: false
    },
    as: "unit"
});

module.exports = Product;