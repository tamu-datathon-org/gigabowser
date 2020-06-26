// create all variables for each component

const NavbarVariables = {
  navbarSamePageItems: [{
    name: "Home",
    href: "/",
    scrollId: "" // Does not scroll to anywhere
  }, {
    name: "Events",
    href: "/events",
    scrollId: ""
  }, {
    name: "Schedule",
    href: "/schedule",
    scrollId: ""
  }, {
    name: "Challenges",
    href: "/challenges",
    scrollId: ""
  }, {
    name: "Apply",
    href: "/apply",
    scrollId: ""
  }]
};

// previous scrollIds
// About --> about, Sponsors --> sponsors, Team --> team

module.exports = NavbarVariables;