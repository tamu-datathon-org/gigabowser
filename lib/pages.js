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

const FooterVariables = {
    footerSocialLinks: [
        { 
            linkClass: "fa-instagram", 
            linkURL: "https://www.instagram.com/tamudatathon/"
        },
        { 
            linkClass: "fa-linkedin", 
            linkURL: "https://www.linkedin.com/company/tamudatathon"
        }, 
        { 
            linkClass: "fa-twitter", 
            linkURL: "https://twitter.com/tamudatathon"
        },
        { 
            linkClass: "fa-facebook", 
            linkURL: "https://www.facebook.com/tamudatathon/"
        },
        { 
            linkClass: "fa-github", 
            linkURL: "https://github.com/tamu-datathon-org/"
        }
    ]
};

const TeamVariables = {
    memberInfo: [
        {
            name: "Josiah Coad",
            position: "President",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "https://github.com/josiahcoad",
            },
            imgPath: "/static/img/team/josiah.jpg"
        },
        {
            name: "Allyson King",
            position: "Vice President",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/allyson.jpg"
        },
        {
            name: "Hana Farid",
            position: "Design Director",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/hana.jpg"
        },
        {
            name: "Felicia Invendy",
            position: "Design Director",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/felicia.jpg"
        },
        {
            name: "George Thayamkery",
            position: "Tech Director",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/george.jpg"
        },
        {
            name: "William Zhao",
            position: "Logistics",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/will.jpg"
        },
        {
            name: "Daniel Abreo",
            position: "Tech",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/dan.jpg"
        },
        {
            name: "Aditya Pethe",
            position: "Logistics",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/aditya.jpg"
        },
        {
            name: "Joshua Jung",
            position: "Logistics",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/joshua.jpg"
        },
        {
            name: "Yun Phelps",
            position: "Design",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/yun.jpg"
        },
        {
            name: "Jonathan Waterman",
            position: "Logistics",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/jon.jpg"
        },
        {
            name: "Samarth Dave",
            position: "Tech",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/samarth.jpg"
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
            name: "Seth Hamilton",
            position: "Logistics / Tech",
            links: {
                "fa-linkedin": "",
                "fa-github-square": "",
            },
            imgPath: "/static/img/team/seth.jpg"
        },
    ]
}

// pack all together with 'Home', 'About', etc.
// representing the title of each page
const pages = {
    'Home': {
        ...NavbarVariables,
        ...FooterVariables,
        ...TeamVariables,
        greeting: 'Hello from TD'
    },
    // ... 'About': { ...AboutVariables }
};

module.exports = pages;