const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const port = 3000;

app.get("/profile", (_, res) => res.render("profile"));

app.listen(port);
