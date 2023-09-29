const express = require("express");

const resultsRouter = require("../results");

const app = express();

app.use("/results", resultsRouter);

module.exports = app;
