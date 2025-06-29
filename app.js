import express from "express";
import db from "./config/db.js";
const app = express();
app.get("/login", (req, res) => {
  console.log("Yes dfsd");
  return res.send({ abs: "ok" });
});
app.get("/", (req, res) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).send("Database error");
    }
    res.json(results);
  });
});
export default app;
