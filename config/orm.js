var connection = require("../config/connection.js");

var orm = {

  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM "+ tableInput + ";";
    connection.query(queryString, function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += 
    
    console.log(queryString);

    connection.query(queryString, vals,  function(err, result){
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  update: function(table, objColVals, inputValue, valueId, cb){
    var queryString = "UPDATE " + table;

    queryString += " WHERE ";
    queryString += 

    connection.query(queryString, function(err, result){
      if (err) {
        throw err;
      }

      cb(result);
    })
  }
};

module.exports = orm;