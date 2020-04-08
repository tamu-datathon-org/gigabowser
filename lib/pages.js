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
            name: "Chinmay Phulse",
            githubLink: "https://github.com/phulsechinmay",
            linkedinLink: "https://www.linkedin.com/in/chinmay-phulse-b33907135",
            imgPath: "/static/img/team/chinmay.jpg"
        },
        {
            name: "Chinmay Phulse",
            githubLink: "https://github.com/phulsechinmay",
            linkedinLink: "https://www.linkedin.com/in/chinmay-phulse-b33907135",
            imgPath: "/static/img/team/chinmay.jpg"
        },
        {
            name: "Chinmay Phulse",
            githubLink: "https://github.com/phulsechinmay",
            linkedinLink: "https://www.linkedin.com/in/chinmay-phulse-b33907135",
            imgPath: "/static/img/team/chinmay.jpg"
        },
        {
            name: "Chinmay Phulse",
            githubLink: "https://github.com/phulsechinmay",
            linkedinLink: "https://www.linkedin.com/in/chinmay-phulse-b33907135",
            imgPath: "/static/img/team/chinmay.jpg"
        },
        {
            name: "Chinmay Phulse",
            githubLink: "https://github.com/phulsechinmay",
            linkedinLink: "https://www.linkedin.com/in/chinmay-phulse-b33907135",
            imgPath: "/static/img/team/chinmay.jpg"
        }
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