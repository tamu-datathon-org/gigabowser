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
app.get("/events", renderPost("./markdown/events.md", "markdown_layout"));
app.get("/schedule", renderPost("./markdown/schedule.md", "markdown_layout"));
app.get("/challenges", renderPost("./markdown/challenges.md", "markdown_layout"));
app.get("/apply", renderPost("./markdown/apply.md", "markdown_layout"));

exports.app = app;