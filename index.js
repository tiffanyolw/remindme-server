const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./configurations/config");

const product = require("./routes/product");
const grocery = require("./routes/grocery");

app.use(express.json());
app.use(cors());

config.authenticate().then(() => {
    console.log("Sync Successful");
}).catch((err) => {
    console.log(err);
});

config.sync({ force: false }).then(() => {
    console.log("Sync successful");
}).catch((err) => {
    console.log(err);
});

app.use("/product", product);
app.use("/grocery", grocery);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});