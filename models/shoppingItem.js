const Sequelize = require("sequelize");
const config = require("./../configurations/config");
const Category = require("./category");
const Unit = require("./unit");
const User = require("./user");

const ShoppingItem = config.define("ShoppingItem", {
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
    quantity: {
        type: Sequelize.DECIMAL(10, 2)
    },
    unitId: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.DECIMAL(10, 2)
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
    },
    cleared: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
}, {
    tableName: 'ShoppingList'
});

ShoppingItem.belongsTo(User, {
    foreignKey: {
        name: "userId",
        allowNull: false
    }
});

// need to append `item` or it will have an alias on two separate associations error (already associated in product)
ShoppingItem.belongsTo(Category, {
    foreignKey: {
        name: "categoryId",
        defaultValue: 1,
        allowNull: false
    },
    as: "itemCategory"
});

Category.hasMany(ShoppingItem, {
    foreignKey: {
        name: "categoryId",
        defaultValue: 1,
        allowNull: false
    },
    as: "itemCategory"
});

ShoppingItem.belongsTo(Unit, {
    foreignKey: {
        name: "unitId"
    },
    as: "itemUnit"
});

Unit.hasMany(ShoppingItem, {
    foreignKey: {
        name: "unitId"
    },
    as: "itemUnit"
});

module.exports = ShoppingItem;