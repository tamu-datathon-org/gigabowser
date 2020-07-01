// questions on left hand side of screen
const LHS = [{
  q: "What is a datathon?",
  a: "A datathon is where you build your analytics skill set and create data driven solutions. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, and more. We’ll take care of you while you learn & create!"
}, {
  q: "Who can come?",
  a: "TAMU Datathon is open to any enrolled undergraduate or graduate student who is at least 18 years of age. We welcome students from all across the world and from all majors!"
}, {
  q: "What level of experience is needed?",
  a: "None! If you’re a beginner to data science, TAMU Datathon is the perfect time and place to learn. We’ll provide introductory coursework and mentors to guide you along your journey to complete a data science project.<br /><br />For our more advanced students, our challenges will peak your interest and allow you to put your skills to the test. We’re committed to helping you build something you can be proud of!"
}, {
  q: "When is the event?",
  a: "October 17-18, 2020! We will publish a complete schedule in the fall. For now, know that we will begin at 9am on Saturday and end at 5pm on Sunday."
}];

// Note: RHS has one more question than LHS

// questions on right hand side of screen
const RHS = [{
  q: "What is TAMU Datathon’s response to COVID-19?",
  a: "For the safety of the 1000+ people involved at the yearly event, TAMU Datathon has decided to move completely online for the 2020 season. We are still going to offer as many features as possible of the event, including sponsor challenges, workshops, learner lessons, awesome prizes, fun games and more! See you in October!"
}, {
  q: "Where is the event?",
  a: "For the health and safety of our attendees, TAMU Datathon 2020 will be held online. For more information on this, stay tuned!"
}, {
  q: "How much does it cost?",
  a: "It’s FREE! All you need is a laptop and Wi-Fi!"
}, {
  q: "How does registration work?",
  a: "Registration will open on July 1st, 2020 and will close on September 15, 2020. Admission decisions will be released by October 1, 2020."
}, {
  q: "How do teams work?",
  a: "Teams are at most 4 people. We encourage working with a team, it’s more fun! You don’t need to have a team before attending the event, there will be plenty of time to form teams on the day-of."
}, {
  q: "Have additional questions?",
  a: 'Send us an email at <a href="mailto:connect@tamudatathon.com">connect@tamudatathon.com</a>'
}];

const FAQVariables = {
  // separate both sides
  FAQ: {
    LHS,
    RHS
  }
};

module.exports = FAQVariables;