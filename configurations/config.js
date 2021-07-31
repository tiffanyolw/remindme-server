const Sequelize = require("sequelize");

const environment = process.env.NODE_ENV || "development";

let database = "project";
let username = "user";
let password = "";
let host = "localhost";
let dialect = "mysql";
let dialectOptions = { decimalNumbers: true }; // to not return decimals as string

if (environment === "production") {
    // omitted for git
}

const config = new Sequelize(database, username, password, { host, dialect, dialectOptions });

module.exports = config;