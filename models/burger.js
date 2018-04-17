// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// Creating a burger object with three functions that mirror the ORM set up with a specified table
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(values, cb){
        orm.insertOne("burgers", "burger_name", values, function(res){
            cb(res);
        });
    },
    updateOne: function(col, condition, cb){
        orm.updateOne("burgers", col, condition, function(res){
            cb(res);
        })
    }
};

// Export the database functions for the controller (burgers_controller.js)
module.exports = burger;
