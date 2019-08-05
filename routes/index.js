const route = require("express").Router();
const Url = require("../models/Url");

route.get("/:urlCode", async (req, res) => {
  try {
    const { urlCode } = req.params;
    const url = await Url.findOne({ urlCode });
    if (url) {
      res.redirect(url.longUrl);
    } else {
      return res.status(404).send("Url not found");
    }
  } catch (error) {
    throw error;
  }
});

module.exports = route;
