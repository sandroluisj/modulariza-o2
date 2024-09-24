const express = require("express");
const app = express()
const timesRoutes = require("./routes/times")
app.use(express.json())
app.use("/times", timesRoutes)
module.exports = app