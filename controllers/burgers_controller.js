var express = require('express');

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) { // Call function "all" (select all data) from orm
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.create("burger_name", req.body.new_burger, function() { // Call function "create" (insert data) from orm
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = req.params.id;

    console.log("condition", condition);

    burger.update(1, condition, function() { // Call function "update" (update data) from orm
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
