// questions on left hand side of screen
const LHS = [{
  q: "What is a datathon?",
  a: "A datathon is where you build your analytics skill set and create data driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, and more. We’ll take care of you while you learn & create!"
}, {
  q: "Who can come?",
  a: "TAMU Datathon is open to any enrolled undergraduate or graduate student who is at least 18 years of age, as well as people who have graduated within 1 year from the event. We welcome students from all across the world and from all majors!"
}, {
  q: "What level of experience is needed?",
  a: "None! If you’re a beginner to data science, TAMU Datathon is the perfect time and place to learn. We’ll provide introductory coursework and mentors to guide you along your journey to complete a data science project.<br /><br />For our more advanced students, our challenges will peak your interest and allow you to put your skills to the test. We’re committed to helping you build something you can be proud of!"
}, {
  q: "When is the event?",
  a: "October 16-17th, 2021. We will publish a complete schedule in the fall."
}];

// Note: RHS has one more question than LHS

// questions on right hand side of screen
const RHS = [{
  q: "Where is the event?",
  a: "Datathon will be hybrid (Both in-person and virtual)! If you are coming in-person, the event will be hosted at the Hall of Champions in Kyle Field."
}, {
  q: "How much does it cost?",
  a: "It’s FREE! All you need is a laptop! (and Wi-Fi for virtual participants)"
}, {
  q: "How does registration work?",
  a: "Registration will open on August 1st, 2021 and will close on October 1st, 2021. Admission decisions will be released shortly after the registration period closes."
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