var orm = require("../config/orm.js");

var burger = {
    all: function(cb) { // Select all data
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) { // Insert a new burger
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) { // Updates an existing burger
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
