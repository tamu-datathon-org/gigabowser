// import all variables & spread their values
const NavbarVariables = require("./NavbarVariables.js");
const FooterVariables = require("./FooterVariables.js");
const TeamVariables = require("./index/TeamVariables.js");
const IndustryVariables = require("./index/IndustryVariables.js");
const SponsorVariables = require("./index/SponsorVariables.js");
const FAQVariables = require("./index/FAQVariables.js");

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
    ...IndustryVariables,
    ...SponsorVariables,
    ...FAQVariables
  },
  // ... 'About': { ...AboutVariables }
};

module.exports = pages;