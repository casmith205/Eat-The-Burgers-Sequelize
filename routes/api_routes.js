// Dependencies
// =============================================================
// Requiring our burger model
var db = require("../models");
// Requiring express
var express = require("express");
var app = express.Router();

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the burgers
  app.get("/", function (req, res) {
    db.Burger.findAll({
      include: [db.Customer]
    })
      .then(function (result) {
        console.log(result);
        var burgerObj = {
          burgers: result
        }
        res.render("index", burgerObj);
      });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    })
      .then(function (result) {
        res.json(result);
      });
  });

  // DELETE route for deleting burgers
  //   app.delete("/api/burgers/:id", function(req, res) {
  //     db.Burger.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     })
  //       .then(function(dbPost) {
  //         res.json(dbPost);
  //       });
  //   });

  // PUT route for updating burgers
  app.put("/api/burgers/:id", function (req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function (result) {
        res.json(result);
      });
  });
};
