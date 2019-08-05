const express = require("express");
const port = process.env.PORT || 8000;
const connect = require("./models/db");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use("/", require("./routes"));
app.use("/api/url", require("./routes/url"));
app.use("/api/auth", require("./routes/user"));

connect();

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
