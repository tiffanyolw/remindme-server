const Sequelize = require("sequelize");
const config = require("./../configurations/config");

const User = config.define("User", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(45),
        allowNull: false
    }
});

module.exports = User;