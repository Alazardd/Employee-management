const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require("./server/database/connection");
const app = express();

dotenv.config({ path: "config.env" });
const port = process.env.PORT || 5000;

app.use(morgan("tiny"));

connectDB();

app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load sources
app.use("/css", express.static(path.resolve(__dirname, "sources/css")));
app.use("/img", express.static(path.resolve(__dirname, "sources/img")));
app.use("/js", express.static(path.resolve(__dirname, "sources/js")));

// load routers
app.use("/", require("./server/routes/router"));
app.listen(port, () => console.log("listening on port", port));
