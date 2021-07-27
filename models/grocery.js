const Sequelize = require("sequelize");
const config = require("./../configurations/config");

const Grocery = config.define("Grocery", {
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
        type: Sequelize.DECIMAL
    },
    unit: {
        type: Sequelize.STRING(45)
    },
    price: {
        type: Sequelize.DECIMAL
    },
    storeName: {
        type: Sequelize.STRING(45)
    },
    category: {
        type: Sequelize.STRING(45)
    },
    notes: {
        type: Sequelize.STRING
    },
    bought: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    tableName: 'ShoppingList'
});

module.exports = Grocery;