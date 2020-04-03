const express = require('express');
const { renderPage, renderPost } = require('./lib/resolvers');
const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('static'))

// PAGES
app.get('/', renderPage("Home", "index"));
app.get('/about', renderPage("About", "about"));

exports.app = app;