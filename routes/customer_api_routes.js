// Dependencies
// =============================================================
// Requiring our model
var db = require("../models");
// Requiring express
var express = require("express");
var app = express.Router();

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the customers
  app.get("/", function (req, res) {
    db.Customer.findAll({
      include: [db.Burger]
    })
      .then(function (result) {
        var custObj = {
          customers: result
        }
        res.render("index", custObj);
      });
  });

  // POST route for saving a new customer
  app.post("/api/customers", function (req, res) {
    console.log(req.body);
    db.Customer.create({
      customer_name: req.body.customer_name
    })
      .then(function (result) {
        res.json(result);
      });
  });
};
