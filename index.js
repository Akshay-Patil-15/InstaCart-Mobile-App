/*
var mysql = require("mysql");

const express = require("express");
var app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());

const connection = mysql.createPool({
  host: "proj1.cijjjogzpczd.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "rdsadminPASS",
  port: "3306",
  database: "proj1_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("Amazon RDS connection failed: " + err.stack);
    return;
  }

  console.log("Connected to Amazon RDS.");
});

app.get("/users", function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query("SELECT * FROM users", function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results);
    });
  });
});

// Starting our server.
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/users so you can see the data.");
});

//app.listen(3000, () => console.log("Express server is tunning at Port 3000"));
//connection.end();
*/

var mysql = require("mysql");
const express = require("express");

const connection = mysql.createPool({
  host: "proj1.cijjjogzpczd.us-east-1.rds.amazonaws.com", // Your connection adress (localhost).
  user: "admin", // Your database's username.
  password: "rdsadminPASS", // Your database's password.
  database: "proj1_db", // Your database's name.
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get("/company", function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(
      "SELECT * FROM company",
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
  });
});

// Starting our server.
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/company so you can see the data.");
});


test(){
    fetch('http://yourPCip:3000/company')
      .then(response => response.json())
      .then(users => console.warn(users))
  }

//connection.end();
