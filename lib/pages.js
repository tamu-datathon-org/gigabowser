// create all variables for each component
const NavbarVariables = {
    image_logo: '/static/img/logos/main.png',
    navbarItems: [
        {
            name: 'Home',
            route: '/'
        }, {
            name: 'About',
            route: '/about'
        }, {
            name: 'Team',
            route: '/team'
        }, {
            name: 'Sponsor',
            route: '/sponsor'
        }
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