import mysql, { createConnection } from "mysql";

export const db = createConnection({
  host: "localhost",
  user: "root",
  password: "slothfullbhuti",
  db: "react_blog",
});
