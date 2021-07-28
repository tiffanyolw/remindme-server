const Sequelize = require("sequelize");
const config = require("./../configurations/config");

const Category = config.define("Category", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false
    }
}, {
    timestamps: false
});

Category.belongsTo(Category, {
    foreignKey: {
        name: "parentCategoryId"
    }
});

module.exports = Category;