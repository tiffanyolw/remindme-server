const Sequelize = require("sequelize");
const config = require("./../configurations/config");
const User = require("./user");

const Location = config.define("Location", {
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

Location.belongsTo(User, {
    foreignKey: {
        name: "userId",
        allowNull: false
    }
});

module.exports = Location;