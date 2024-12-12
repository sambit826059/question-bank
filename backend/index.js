const express = require("express");
const app = express();
import createUserSchema from "./db/db";
import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

app.get("/", (req, res) => {
  res.send("Server is Healthy");
})

app.post("/create-user", (req, res) => {
  const { first_name, middle_name, last_name, email, password } = req.body;

  if (first_name || !middle_name || !last_name || !email || !password) {
    return res.status(400).json({ error: "MIssing required values" });
  }

  const query =
    INSERT INTO users (first_name, middle_name, last_name, email, password)
  VALUES($1, $2, $3, $4, $5)
  RETURNING *;
  `;

})


app.listen(5000);
