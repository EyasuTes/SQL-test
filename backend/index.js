const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "eyasuserver.database.windows.net",
  user: "eyasu",
  password: "Et054552446$",
  database: "test-databaseEyasu",
});

db.connect();

app.get("/songs", (req, res) => {
  const qu = "select id from albums";
  db.query(qu, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.listen(5000, console.log("server listening"));
