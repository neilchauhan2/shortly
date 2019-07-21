const express = require("express");
const port = process.env.PORT || 8000;
const connect = require("./config/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/api", require("./routes"));
app.use("/api/url", require("./routes/url"));
app.use("/api/auth", require("./routes/user"));

connect();

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
