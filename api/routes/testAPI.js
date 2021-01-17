const sqlite3 = require("sqlite3");
const path = require("path");
const dbpath = path.resolve(__dirname, "./popthebubble.db");
const db = new sqlite3.Database(dbpath);
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("API is working properly");
});

router.get("/GET/", function (req, res, next) {
  const comments = new Array();
  const newComments = new Array();
  const mainContent = new Map();

  const titles = db.all(
    "SELECT TITLE FROM ARTICLES LIMIT 4",
    (error, rows) => {}
  );

  console.log(titles);

  //   titles.forEach((title) => {
  //     db.all(
  //       `SELECT COMMENT FROM COMMENTS WHERE TITLE = ? LIMIT 2`,
  //       title,
  //       (error, rows) => {
  //         rows.forEach((row) => {
  //           comments.push(row.COMMENT);
  //         });
  //       }
  //     );
  //   });

  //   titles.forEach((title) => {
  //     newComments.push(comments.pop());
  //     newComments.push(comments.pop());
  //     console.log(newComments);
  //     mainContent.set(title, newComments);
  //     newComments.pop();
  //     newComments.pop();
  //   });

  res.send(mainContent);
});

module.exports = router;
