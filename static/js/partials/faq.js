window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
});

// put other stuff here like button interactions etc.
const content = [
  {
    "question": "What is TAMU Datathon?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#FFBABA"
  },
  {
    "question": "When is the event?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#C4FFBA"
  },
  {
    "question": "Where is the event?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#FFDBBA"
  },
  {
    "question": "How do I sign up?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#BAE6FF"
  },
  {
    "question": "How much does it cost?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#D1A7E5"
  },
  {
    "question": "Who can attend?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#E9BAFF"
  },
  {
    "question": "How much do I need to know?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#BAD6FF"
  },
  {
    "question": "What should I bring?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#FFECBA"
  },
  {
    "question": "How do teams work?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#BBBAFF"
  },
  {
    "question": "I have another question?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#C4FFBA"
  }
]

let contentElement = ""
content.map(({question, answer, color}) => {
  contentElement += `
    <div class="faqs-item">
      <div class="faqs-ruler">
        ${question}  
      </div>
      <div class="faqs-sheet" style="background:${color}">
        <div class="faqs-text">
          ${answer}
        </div>
      </div>
    </div>
  `
})

document.querySelector(".faqs-container").innerHTML = contentElement;

const tracker = document.querySelectorAll(".faqs-item");
const answers = document.querySelectorAll(".faqs-sheet");
const texts = document.querySelectorAll(".faqs-text")
let active = false;
let active_num = -1;

const openCard = (i) => {
  console.log(`card ${i} is being opened`)
  answers[i].style.gridTemplateRows = '10rem';
  answers[i].style.width = '100%';
  answers[i].style.transform = 'skewY(0)';
  answers[i].style.transition = 'all 0.4s ease-in-out';
  texts[i].style.transition = 'all 0.4s 0.4s ease-in-out';
  texts[i].style.opacity = 1;
}

const closeCard = (i) => {
  console.log(`card ${i} is being closed`)
  answers[i].style.gridTemplateRows = '0';
  answers[i].style.width = '95%';
  answers[i].style.transform = 'skewY(1.2deg) translateY(-50%)';
  answers[i].style.transition = 'all 0.4s 0.4s ease-in-out';
  texts[i].style.transition = 'all 0.4s ease-in-out';
  texts[i].style.opacity = 0;
}

for (let i = 0; i < tracker.length; i++) {  
  tracker[i].addEventListener("click", () => {
    if (active) {
      closeCard(active_num);
      if (active_num !== i) {
        openCard(i);
        active_num = i;
        active = true;
      }
      else {
        active = false;
      }
    }
    else {
      openCard(i);
      active_num = i;
      active = true;
    }
  })
}