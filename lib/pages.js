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

// pack all together with 'Home', 'About', etc.
// representing the title of each page
const pages = {
    'Home': {
        ...NavbarVariables,
        greeting: 'Hello from TD'
    },
    // ... 'About': { ...AboutVariables }
};

module.exports = pages;