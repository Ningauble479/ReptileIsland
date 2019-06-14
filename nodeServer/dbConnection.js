var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jakeybear5",
  database: 'useraccount',
  insecureAuth: true,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO useraccount (Email, Name, Password) VALUES ('', '')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});