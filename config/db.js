// const mysql = require("mysql2");
import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql2";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    ca: fs.readFileSync(path.join(_dirname, "../certs/ca.pem")),
  },
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
    return;
  }
  console.log("✅ Connected to MySQL Database");
});

// default.exports = connection;
export default connection;
