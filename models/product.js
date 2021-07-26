const Sequelize = require("sequelize");
const config = require("./../configurations/config");

const Product = config.define("Product", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    quantity: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    unit: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    purchaseDate: {
        type: Sequelize.DATE
    },
    expiryDate: {
        type: Sequelize.DATE
    },
    category: {
        type: Sequelize.STRING(45)
    },
    locationStored: {
        type: Sequelize.STRING(45)
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

module.exports = Product;