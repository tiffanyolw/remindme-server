const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./configurations/config");

const product = require("./routes/product");
const shopping = require("./routes/shopping");
const category = require("./routes/category");
const location = require("./routes/location");
const unit = require("./routes/unit");
const user = require("./routes/user");

app.use(express.json());
app.use(cors());

config.authenticate().then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
});

config.sync({ force: false }).then(() => {
    console.log("Sync successful");
}).catch((err) => {
    console.log(err);
});

app.use("/product", product);
app.use("/shopping", shopping);
app.use("/category", category);
app.use("/location", location);
app.use("/unit", unit);
app.use("/user", user);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
