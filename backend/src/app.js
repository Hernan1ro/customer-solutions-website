const express = require("express");
const morgan = require("morgan");

const app = express();

//--------------settings ---------------//

app.set("port", 4000);

//------------Middlewares--------------//
app.use(morgan("dev"));

module.exports = app;
