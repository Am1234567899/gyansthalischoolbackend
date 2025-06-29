import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2";
console.log(
  process.env.DB_HOST,
  "host",
  process.env.DB_USER,
  "user",
  process.env.DB_PASSWORD,
  "oassword",
  process.env.DB_NAME,
  "name",
  process.env.DB_PORT,
  "port"
);
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectTimeout: 10000, // Important!
});

connection.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
  } else {
    console.log("✅ Connected to MySQL D");
  }
});

export default connection;
