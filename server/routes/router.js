const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller");

route.get("/", services.homeRoutes);

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/add-employee", services.add_employee);

route.get("/update-employee", services.update_employee);

// API

route.post("/api/employees", controller.create);
route.get("/api/employees", controller.find);
route.put("/api/employees/:id", controller.update);
route.delete("/api/employees/:id", controller.delete);

module.exports = route;
