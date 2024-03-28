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
app.get("/twitch", renderPage("twitch", "twitch"));
app.get("/livestream-timer", renderPage("livestream-timer", "livestream-timer"));
app.get("/events", renderPost("./markdown/events.md", "markdown_layout"));
app.get("/schedule", renderPost("./markdown/schedule.md", "markdown_layout_wide"));
app.get("/legal/talent_liability_terms", renderPost("./markdown/legal/talent_liability_terms.md", "markdown_layout"));
app.get("/challenges", renderPost("./markdown/challenges.md", "markdown_layout"));
app.get("/apply", renderPost("./markdown/apply.md", "markdown_layout"));
app.get("/volunteer", renderPost("./markdown/volunteer.md", "markdown_layout"));

exports.app = app;