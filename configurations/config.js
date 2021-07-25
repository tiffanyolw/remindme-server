const Sequelize = require("sequelize");

const environment = process.env.NODE_ENV || "development";

let database = "emptyout";
let username = "user";
let password = "";
let host = "localhost";
let dialect = "mysql";

if (environment === "production") {
    // TO DO
}

const config = new Sequelize(database, username, password, { host, dialect });

module.exports = config;