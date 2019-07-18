const express = require("express");
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const app = express();

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
