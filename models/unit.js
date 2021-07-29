const Sequelize = require("sequelize");
const config = require("./../configurations/config");

const Unit = config.define("Unit", {
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
    pluralName: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
});

module.exports = Unit;