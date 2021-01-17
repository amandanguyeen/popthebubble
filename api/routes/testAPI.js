const sqlite3 = require("sqlite3");
const path = require("path");
const dbpath = path.resolve(__dirname, "./popthebubble.db");
const db = new sqlite3.Database(dbpath);
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  db.all("SELECT ID, TITLE FROM ARTICLES", (error, rows) => {
    console.log(rows);
    rows.forEach((row) => {
      console.log(row.ID + " " + row.TITLE);
    });
  });
  console.log(db);
  console.log("HELLO???");
  res.send("API is working properly");
});

module.exports = router;
