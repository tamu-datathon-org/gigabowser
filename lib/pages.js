// create all variables for each component
const NavbarVariables = {
    navbarSamePageItems: [
        {
            name: 'Home',
            route: '/'
        }, {
            name: 'About',
            route: '#about'
        }, {
            name: 'Sponsors',
            route: '#sponsors'
        }, {
            name: 'Team',
            route: '#team'
        },
    ]
};

// USAGE example
const AboutVariables = {
    Greeting: 'Welcome to the about page',
    // ... and so on
};

const TeamVariables = {
    memberInfo: [
        {
            name: "Josiah Coad",
            position: "President",
            links: {
                "fa-linkedin": "https://www.linkedin.com/in/chinmay-phulse-b33907135",
                "fa-github-square": "https://github.com/phulsechinmay",
            },
            imgPath: "/static/img/team/josiah.jpg"
        },
        {
            name: "Allyson King",
            position: "Vice President",
            links: {
                "fa-linkedin": "https://www.linkedin.com/in/chinmay-phulse-b33907135",
                "fa-github-square": "https://github.com/phulsechinmay",
            },
            imgPath: "/static/img/team/allyson.jpg"
        },
        {
            name: "Yun Phelps",
            position: "Design Director",
            links: {
                "fa-linkedin": "https://www.linkedin.com/in/chinmay-phulse-b33907135",
                "fa-github-square": "https://github.com/phulsechinmay",
            },
            imgPath: "/static/img/team/yun.jpg"
        },
        {
            name: "George Thayamkery",
            position: "Tech Director",
            links: {
                "fa-linkedin": "https://www.linkedin.com/in/chinmay-phulse-b33907135",
                "fa-github-square": "https://github.com/geooot",
            },
            imgPath: "/static/img/team/george.jpg"
        },
        {
            name: "Chinmay Phulse",
            position: "Tech",
            links: {
                "fa-linkedin": "https://www.linkedin.com/in/chinmay-phulse-b33907135",
                "fa-github-square": "https://github.com/phulsechinmay",
            },
            imgPath: "/static/img/team/chinmay.jpg"
        },
        {
            name: "Aditya Pethe",
            position: "Logistics",
            links: {
                "fa-linkedin": "https://www.linkedin.com/in/chinmay-phulse-b33907135",
                "fa-github-square": "https://github.com/phulsechinmay",
            },
            imgPath: "/static/img/team/aditya.jpg"
        },
    ]
}

// pack all together with 'Home', 'About', etc.
// representing the title of each page
const pages = {
    'Home': {
        ...NavbarVariables,
        ...TeamVariables
    },
    // ... 'About': { ...AboutVariables }
};

module.exports = pages;