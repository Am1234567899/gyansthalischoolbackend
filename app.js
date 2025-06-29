import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import db from "./config/db.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/login", (req, res) => {
  console.log("Yes dfsdhfyt done");
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
