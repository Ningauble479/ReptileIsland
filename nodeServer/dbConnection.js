var express = require("express");
var app = express();
var mysql = require("mysql");
var path = require('path')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jakeybear5",
  database: 'reptileisland',
});
app.get('/', function(req,res) {
res.sendFile(path.join(__dirname+'../adminpage/products.html'));
});

app.post('/submit', function(req,res) {
  var name= req.body.name;
  var price= req.body.price;
  var stock= req.body.stock;
  var info= req.body.info;
  res.write('You sent the name "' + req.body.name+'".\n');
  res.write('You sent the price "' + req.body.price+'".\n');
  res.write('You sent the stock "' + req.body.stock+'".\n');
  res.write('You sent the info "' + req.body.info+'".\n');

  con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO products (name, price, stock, info) VALUES ('"+name+"', '"+price+"','"+stock+"', '"+info+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 product inserted");
       res.end();
    });
    });
  })
  app.listen(3000);
  console.log("Running at Port 3000");