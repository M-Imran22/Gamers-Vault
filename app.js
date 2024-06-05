const express = require("express");
const app = express();
const db = require("./models");
const path = require("path");
const ejsMate = require("ejs-mate");

const { Inventory, Admin } = require("./models");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

app.get("/inventory", (req, res, next) => {
  res.render("inventory/inventory.ejs");
});

app.post("/inventory/new", (req, res) => {
  const { itemTitle, quantity, marketPrice, costPrice, margin, inventoryType } =
    req.body;

  Inventory.create({
    itemTitle,
    quantity,
    marketPrice,
    costPrice,
    margin: marketPrice - costPrice,
    inventoryType,
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });

  res.send("Insert Data in Inventory");
});

app.get("/admin", (req, res) => {
  Admin.create({
    name: "Imran khan",
    email: "khan@gmail.com",
    password: "khan123",
    age: 20,
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });

  res.send("Insert Data in Admin");
});

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("Listening on port 8080");
  });
});
