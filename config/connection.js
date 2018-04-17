// Require mysql 
var mysql = require("mysql");
var connection;

// Create the connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
        connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 8889,
        database: "burgers_db"
    });
};

// Connect and log the connection threadId
connection.connect(function(err, data){
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// Export the connection
module.exports = connection;