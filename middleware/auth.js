const config = require("config");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.jwtSecret
    ? process.env.jwtSecret
    : config.get("jwtSecret");
function auth(req, res, next) {
    const token = req.header("x-auth-token");

    // Check for token
    if (!token) return res.status(401).send("No token, authorizaton denied");

    try {
        // Verify token
        const decoded = jwt.verify(token, jwtSecret);
        // Add user from payload
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).send("Token is not valid");
    }
}

module.exports = auth;
