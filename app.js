// Dependencies
// =============================================================
let express = require("express");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [
  {
    name: "table1",
    phoneNumber: "02939393",
    email: "table1@gmail.com",
    uniqueID: "?"
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/index.html", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.post("/api/tables", function(req, res) {

  let newTable = req.body;


  console.log("this works")

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

