import express from "express";
import { db } from "./db.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      return res.json("there's no data");
    } else {
      return res.json(data);
    }
  });
});

app.listen(8000, () => {
  console.log("Connected");
});
