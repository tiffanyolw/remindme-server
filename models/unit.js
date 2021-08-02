const Sequelize = require("sequelize");
const config = require("./../configurations/config");
const User = require("./user");

const Unit = config.define("Unit", {
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
    pluralName: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

Unit.belongsTo(User, {
    foreignKey: {
        name: "userId",
        allowNull: false
    }
});

module.exports = Unit;