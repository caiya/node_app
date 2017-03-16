module.exports = function(app) {
    app.use("/user", require("./user"));
    app.use("/article", require("./article"));
    app.use("/score", require("./score"));
}