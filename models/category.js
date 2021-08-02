const Sequelize = require("sequelize");
const config = require("./../configurations/config");
const User = require("./user");

const Category = config.define("Category", {
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
    }
}, {
    timestamps: false
});

Category.belongsTo(User, {
    foreignKey: {
        name: "userId",
        allowNull: false
    }
});

module.exports = Category;