var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");



// GET ROUTE
router.get("/", function (req, res) {
    // Uses the formula defined at burger.js and passes through the callback function
    burger.selectAll(function (data) {
        var burgerObj = {
            burgers: data
        };
        // render the burger object on the handlebars page
        res.render("index", burgerObj);
    });
});

// POST ROUTE
router.post("/api/burgers", function (req, res) {
    // Uses the formula defined at burger.js and passes through the callback function
    // Also passes through the values at req.body.name as the new burger name to add to DB
    burger.insertOne(req.body.burger_name, function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

// PUT ROUTE
router.put("/api/burgers/:id", function (req, res) {
    // Using the id from the path, define the condition on where to update in the DB
    var condition = "id = " + req.params.id;
    burger.updateOne(
        // SET Devoured to true 
        {
            devoured: true
        },
        // WHERE as the condition defined above
        condition,
        // Callback
        function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// Export routes for server.js to use.
module.exports = router;
