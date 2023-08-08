window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
});

// todo: change icon & icon animation
// todo: change a & qs to updated version
// todo: change colors to match theme & ensure contrast levels
// todo: add intersection observer to show animation
// todo: fix transition stanky leg visual bug
const content = [
  {
    "question": "What is TAMU Datathon?",
    "answer": "A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more!",
    "color": "#FFBABA"
  },
  {
    "question": "When is the event?",
    "answer": "October 8-9th, 2022. We will publish a complete schedule soon, but for now, know that we will begin at 9 am on Saturday and end at 5 pm on Sunday.",
    "color": "#C4FFBA"
  },
  {
    "question": "Where is the event?",
    "answer": "Datathon will be hybrid (both in-person and virtual)! If you are coming in person, the event will be hosted at the Texas A&M Memorial Student Center.",
    "color": "#FFDBBA"
  },
  {
    "question": "How do I sign up?",
    "answer": "Registration will begin on August 31st, 2022, and end in late September. Admission decisions will be released soon after the registration ends.",
    "color": "#BAE6FF"
  },
  {
    "question": "How much does it cost?",
    "answer": "It is FREE! All you need is a laptop! We will even throw in tons of swag, food, Wi-Fi, workspaces, and caffeine during your stay.",
    "color": "#D1A7E5"
  },
  {
    "question": "Who can attend?",
    "answer": "TAMU Datathon is open to any enrolled undergraduate or graduate student at least 18 years of age and anyone who has graduated within one year of the event. We welcome students from all across the world and from all majors!",
    "color": "#E9BAFF"
  },
  {
    "question": "How much do I need to know?",
    "answer": "If you are new to data science, TAMU Datathon is the perfect time and place to learn. We will provide introductory coursework and mentors to guide you along your journey to complete a data science project. For our more advanced students, our challenges will pique your interest and allow you to put your skills to the test. We are committed to helping you build something you can be proud of!",
    "color": "#BAD6FF"
  },
  {
    "question": "What should I bring?",
    "answer": "Since the event will last overnight, it is a good idea to bring a pillow and a sleeping bag if you are planning on staying at the venue.",
    "color": "#FFECBA"
  },
  {
    "question": "How do teams work?",
    "answer": "Teams can have up to 4 people. We encourage working with a team, it's more fun! You do not need to form a team before attending the event. There will be plenty of time to find a team after opening ceremonies.",
    "color": "#BBBAFF"
  },
  {
    "question": "I have another question?",
    "answer": "Send us an email at connect@tamudatathon.com.",
    "color": "#C4FFBA"
  }
]

let contentElement = ""
content.map(({question, answer, color}) => {
  contentElement += `
    <div class="faqs-item">
      <div class="faqs-ruler">
        ${question}  
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="faqs-btn">
          <path d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"/>
        </svg>
      </div>
      <div class="faqs-sheet faqs-sheet-passive" style="background:${color}">
        <div class="faqs-text">
          <div class="faqs-sheet-graphic">
            <div class="faqs-cut-marker"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="faqs-scissor-icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
            </svg>

          </div>
          <div class="faqs-answer">
          ${answer}
          </div>
        </div>
      </div>
    </div>
  `
})

document.querySelector(".faqs-container").innerHTML = contentElement;

const tracker = document.querySelectorAll(".faqs-item");
const answers = document.querySelectorAll(".faqs-sheet");
const texts = document.querySelectorAll(".faqs-text")
const btns = document.querySelectorAll(".faqs-btn")
let active = false;
let active_num = -1;

const openCard = (i) => {
  answers[i].classList.remove("faqs-sheet-passive")
  answers[i].classList.add("faqs-sheet-active")
  btns[i].style.transform = "rotate(180deg)"
  setTimeout(() => {
    texts[i].style.visibility = "visible"
    texts[i].style.opacity = 1
  }, 300)
}

const closeCard = (i) => {
    texts[i].style.opacity = 0
    texts[i].style.visibility = "hidden"
    btns[i].style.transform = "rotate(0deg)"
  setTimeout(() => {
    answers[i].classList.remove("faqs-sheet-active")
    answers[i].classList.add("faqs-sheet-passive")
  }, 100)
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