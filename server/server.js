const express = require("express");
const port = process.env.PORT || 8000;
const connect = require("./config/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connect();

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
