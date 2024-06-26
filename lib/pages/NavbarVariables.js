// create all variables for each component

const NavbarVariables = {
  navbarSamePageItems: [
  {
    name: "Home",
    href: "/",
    scrollId: "", // Does not scroll to anywhere
  },
  // {
  //   name: "Leaderboard",
  //   href: "https://td-leaderboard.vercel.app/",
  //   scrollId: ""
  // },
  {
    name: "Schedule",
    href: "/schedule",
    scrollId: ""
  },
  {
    name: "Challenges",
    href: "https://tamudatathon.ctfd.io/",
    scrollId: ""
  },{
    name: "Help Queue",
    href: "/help",
    scrollId: ""
  },
  // {
  //   name: "Apply",
  //   href: "/apply",
  //   scrollId: ""
  // }
  ]
};

// {
//   name: "Volunteer",
//   href: "/volunteer",
//   scrollId: ""
// }
// {
//   name: "Challenges",
//   href: "/challenges",
//   scrollId: ""
// }
// {
//   name: "Events",
//   href: "/events",
//   scrollId: ""
// }

// previous scrollIds
// About --> about, Sponsors --> sponsors, Team --> team

module.exports = NavbarVariables;
