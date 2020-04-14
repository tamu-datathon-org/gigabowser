// import all variables & spread their values
const NavbarVariables = require("./NavbarVariables.js");
const FooterVariables = require("./FooterVariables.js");
const TeamVariables = require("./TeamVariables.js");
const SponsorVariables = require("./SponsorVariables.js");

// USAGE example
// const AboutVariables = {
//     Greeting: 'Welcome to the about page',
//      ... and so on
// };

// pack all together with 'Home', 'About', etc.
// representing the title of each page
const pages = {
  Home: {
    ...NavbarVariables,
    ...FooterVariables,
    ...TeamVariables,
    ...SponsorVariables,
    greeting: "Hello from TD"
  }
  // ... 'About': { ...AboutVariables }
};

module.exports = pages;