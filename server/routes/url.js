const route = require("express").Router();
const validUrl = require("valid-url");
const config = require("config");
const shortid = require("shortid");
const Url = require("../models/Url");

route.post("/shorten", async (req, res) => {
  try {
    const { longUrl, keyword } = req.body;
    const baseUrl = config.get("baseUrl");
    // baseUrl validation
    if (!validUrl.isUri(baseUrl)) {
      return res.status(401).send("Invalid base url");
    }

    // generate url code
    const urlCode = shortid.generate();

    // longUrl validation
    if (validUrl.isUri(longUrl)) {
      const url = await Url.findOne({ longUrl });
      if (url) {
        return res.send(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode
        });

        await url.save();
        res.send(url);
      }
    } else {
      return res.status(401).send("Invalid long url");
    }
  } catch (error) {
    throw error;
  }
});

module.exports = route;
