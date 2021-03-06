const mongoose = require("mongoose");
const config = require("config");
const uri = process.env.mongodbURI
    ? process.env.mongodbURI
    : config.get("mongodbURI");

const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true
        });

        console.log("mongodb connected");
    } catch (error) {
        throw error;
    }
};

module.exports = connect;
