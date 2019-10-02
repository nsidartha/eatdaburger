var connection = require("./connection.js");

var orm = {

    selectAll: function(table, cd){
        var queryString = "SELECT * FROM ??; ";
        connection.query(queryString, [table], function(err, res){
            if(err){
                throw err;
            }
            cd(res);
        });
    },

    InsertOne: function(table, column, value, cb) {
        const queryString = "INSERT INTO ?? (??) VALUES (?);";
        connection.query(queryString, [table, column, value], function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });
      },

      updateOne: function(table, column, value, condition, cb) {
        const queryString = "UPDATE ?? SET ??=? WHERE id=?;";
        connection.query(queryString, [table, column, value, condition], function(err, res) {
          if (err) {
            throw err;
          }
          cb(res);
        });
      }
};

module.exports = orm;