// create all variables for each component

const NavbarVariables = {
  navbarSamePageItems: [{
    name: "Home",
    href: "/",
    scrollId: "", // Does not scroll to anywhere
  }, {
    name: "Apply",
    href: "/apply",
    scrollId: ""
  }, {
    name: "Schedule",
    href: "/schedule",
    scrollId: ""
  }, {
    name: "Challenges",
    href: "/challenges",
    scrollId: ""
  }]
};

// If we decide to support events, add the following in navbarSamePageItems
// {
//   name: "Events",
//   href: "/events",
//   scrollId: ""
// }

// previous scrollIds
// About --> about, Sponsors --> sponsors, Team --> team

module.exports = NavbarVariables;