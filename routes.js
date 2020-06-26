const express = require("express");
const {
  renderPage,
  renderPost
} = require("./lib/resolvers");
const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

// PAGES
app.get("/", renderPage("Home", "index"));
app.get("/events", renderPost("./static/markdown/events.md", "markdown_layout"));

exports.app = app;