// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "g2rupb4j4ieuz771",
  password: "pq4h2hanv0mvhx8i",
  database: "geetbp74ejzpfxql"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


