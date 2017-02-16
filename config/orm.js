var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    all: function(tableInput, cb) { // Executes the Select All query and send result as cllback
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            console.log(result);
            cb(result);
        });
    },
    update: function(table, value, condition, cb) { // Executes the Update query and send result as cllback
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";

        connection.query(queryString, [table, value, condition], function(err, result) {
            console.log(result);
            cb(result);
        });
    },
    create: function(table, columns, values, cb) { // Executes the Insert query and send result as cllback
        var queryString = "INSERT INTO ?? (??,devoured,date) VALUES (?,0,NOW())";
        console.log(queryString);
        connection.query(queryString, [table, columns, values], function(err, result) {
            if (err) console.log(err);
            console.log(result);
            cb(result);
        });
    }
};

// Export orm for burger.js model to use.
module.exports = orm;
