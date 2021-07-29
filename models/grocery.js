const Sequelize = require("sequelize");
const config = require("./../configurations/config");
const Category = require("./category");
const Unit = require("./unit");

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
    unitId: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.DECIMAL
    },
    storeName: {
        type: Sequelize.STRING(45)
    },
    categoryId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false
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

Grocery.belongsTo(Category, {
    foreignKey: {
        name: "categoryId",
        defaultValue: 1,
        allowNull: false
    }
});

Grocery.belongsTo(Unit, {
    foreignKey: {
        name: "unitId"
    }
});

module.exports = Grocery;