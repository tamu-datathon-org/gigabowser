// create all variables for each component
const NavbarVariables = {
    image_logo: '/static/img/logos/main.png',
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
        },
    ]
}

// pack all together with 'Home', 'About', etc.
// representing the title of each page
const pages = {
    'Home': {
        ...NavbarVariables,
        ...FooterVariables,
        greeting: 'Hello from TD'
    },
    // ... 'About': { ...AboutVariables }
};

module.exports = pages;