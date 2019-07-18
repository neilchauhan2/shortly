const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = Url = mongoose.model("Url", urlSchema);
