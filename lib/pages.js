// create all variables for each component
const NavbarVariables = {
  navbarSamePageItems: [{
    name: "Home",
    route: "/"
  }, {
    name: "About",
    route: "#about"
  }, {
    name: "Sponsors",
    route: "#sponsors"
  }, {
    name: "Team",
    route: "#team"
  }]
};

// USAGE example
const AboutVariables = {
  Greeting: "Welcome to the about page"
  // ... and so on
};

const FooterVariables = {
  footerSocialLinks: [{
    linkClass: "fa-instagram",
    linkURL: "https://www.instagram.com/tamudatathon/"
  }, {
    linkClass: "fa-linkedin",
    linkURL: "https://www.linkedin.com/company/tamudatathon"
  }, {
    linkClass: "fa-twitter",
    linkURL: "https://twitter.com/tamudatathon"
  }, {
    linkClass: "fa-facebook",
    linkURL: "https://www.facebook.com/tamudatathon/"
  }, {
    linkClass: "fa-github",
    linkURL: "https://github.com/tamu-datathon-org/"
  }]
};

const TeamVariables = {
  memberInfo: [{
    name: "Josiah Coad",
    position: "President",
    links: {
      "fa-linkedin": "",
      "fa-github-square": "https://github.com/josiahcoad"
    },
    imgPath: "/static/img/team/josiah.jpg"
  }, {
    name: "Allyson King",
    position: "Vice President",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/allyson.jpg"
  }, {
    name: "Hana Farid",
    position: "Design Director",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/hana.jpg"
  }, {
    name: "Felicia Invedy",
    position: "Design Director",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/felicia.jpg"
  }, {
    name: "George Thayamkery",
    position: "Tech Director",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/george.jpg"
  }, {
    name: "William Zhao",
    position: "Logistics",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/will.jpg"
  }, {
    name: "Daniel Abreo",
    position: "Tech",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/dan.jpg"
  }, {
    name: "Aditya Pethe",
    position: "Logistics",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/aditya.jpg"
  }, {
    name: "Joshua Jung",
    position: "Logistics",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/joshua.jpg"
  }, {
    name: "Yun Phelps",
    position: "Design",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/yun.jpg"
  }, {
    name: "Jonathan Waterman",
    position: "Logistics",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/jon.jpg"
  }, {
    name: "Samarth Dave",
    position: "Tech",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/samarth.jpg"
  }, {
    name: "Chinmay Phulse",
    position: "Tech",
    links: {
      "fa-linkedin": "https://www.linkedin.com/in/chinmay-phulse-b33907135",
      "fa-github-square": "https://github.com/phulsechinmay"
    },
    imgPath: "/static/img/team/chinmay.jpg"
  }, {
    name: "Seth Hamilton",
    position: "Logistics / Tech",
    links: {
      "fa-linkedin": "",
      "fa-github-square": ""
    },
    imgPath: "/static/img/team/seth.jpg"
  }]
};

const SponsorVariables = {
  pastSponsors: [{
    name: "Facebook",
    img: "/static/img/sponsors/past/facebook.png",
    url: "https://www.facebook.com/",
    variant: "xl"
  }, {
    name: "ConocoPhillips",
    img: "/static/img/sponsors/past/conocophillips.png",
    url: "http://www.conocophillips.com/",
    variant: "lg"
  }, {
    name: "Aramco",
    img: "/static/img/sponsors/past/aramco.png",
    url: "http://www.aramcoservices.com/",
    variant: "lg"
  }, {
    name: "Walmart Technology",
    img: "/static/img/sponsors/past/walmart.png",
    url: "https://walmart.com/",
    variant: "lg"
  }, {
    name: "Motiva",
    img: "/static/img/sponsors/past/motiva.png",
    url: "https://motiva.com/",
    variant: "lg"
  }, {
    name: "Shell",
    img: "/static/img/sponsors/past/shell.svg",
    url: "https://shell.com/",
    variant: "lg"
  }, {
    name: "Goldman Sachs",
    img: "/static/img/sponsors/past/goldmansachs.png",
    url: "https://goldmansachs.com/",
    variant: "lg"
  }, {
    name: "BP",
    img: "/static/img/sponsors/past/bp.png",
    url: "https://bp.com/",
    variant: "lg"
  }, {
    name: "USAA",
    img: "/static/img/sponsors/past/usaa.png",
    url: "https://usaa.com/",
    variant: "lg"
  }, {
    name: "MathWorks",
    img: "/static/img/sponsors/past/mathworks.svg",
    url: "https://mathworks.com/",
    variant: "lg"
  }, {
    name: "CBRE",
    img: "/static/img/sponsors/past/cbre.png",
    url: "https://cbre.com/",
    variant: "lg"
  }, {
    name: "MLH",
    img: "/static/img/sponsors/past/mlh.svg",
    url: "https://mlh.io/",
    variant: "lg"
  }, {
    name: "DigitalOcean",
    img: "/static/img/sponsors/past/digitalocean.png",
    url: "https://do.co/studenthackathon",
    variant: "lg"
  }, {
    name: "Github",
    img: "/static/img/sponsors/past/github.png",
    url: "https://digitalocean.com/",
    variant: "lg"
  }, {
    name: "Sticker Mule",
    img: "/static/img/sponsors/past/sticker-mule.png",
    url: "http://hackp.ac/mlh-stickermule-hackathons",
    variant: "lg"
  }, {
    name: "Texas A&M Department of Computer Science and Engineering",
    img: "/static/img/sponsors/past/csce.png",
    url: "https://engineering.tamu.edu/cse/index.html",
    variant: "lg"
  }, {
    name: "Texas A&M Science Department",
    img: "/static/img/sponsors/past/science.png",
    url: "https://www.science.tamu.edu/",
    variant: "lg"
  }, {
    name: "Texas A&M Transportation Institute",
    img: "/static/img/sponsors/past/tti_logo.png",
    url: "http://tti.tamu.edu/",
    variant: "lg"
  }, {
    name: "Texas A&M Institute of Data Science",
    img: "/static/img/sponsors/past/tamids_logo.png",
    url: "http://tamids.tamu.edu/",
    variant: "lg"
  }, {
    name: "Texas A&M Statistics Department",
    img: "/static/img/sponsors/past/stat_logo.png",
    url: "http://stat.tamu.edu/",
    variant: "lg"
  }, {
    name: "Texas A&M Math Department",
    img: "/static/img/sponsors/past/math_logo.png",
    url: "http://math.tamu.edu/",
    variant: "lg"
  }, {
    name: "Texas A&M Data Analytics Club",
    img: "/static/img/sponsors/past/tdac.png",
    url: "https://www.tamuanalytics.com/",
    variant: "lg"
  }]
};

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