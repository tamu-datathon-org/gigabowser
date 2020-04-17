// questions on left hand side of screen
const LHS = [{
  q: "What is TAMU Datathon?",
  a: "Not a clue. I'm just building this website."
}, {
  q: "How much does it cost?",
  a: "It's free dum dum."
}, {
  q: "What can I bring?",
  a: "Your homework that we know you won't do until 2am last day of the hackathon."
}, {
  q: "Do I need a team?",
  a: "People have won alone but most winners are in teams of up to 4."
}];

// questions on right hand side of screen
const RHS = [{
  q: "Do you offer travel reimbursements?",
  a: "Depends. Do you accept Google Cloud credits?"
}, {
  q: "Who can attend?",
  a: "Only those with a burning and unquenchable desire to solve real world data science problems."
}, {
  q: "My question isn't listed.",
  a: 'Email us <a href="mailto:connect@tamudatathon.com">here</a>.'
}, {
  q: "Where is TAMU Datathon?",
  a: 'We\'re in <a href="https://www.tamu.edu/">Gig \'em land</a>.'
}];

const FAQVariables = {
  // separate both sides
  FAQ: {
    LHS,
    RHS
  }
};

module.exports = FAQVariables;