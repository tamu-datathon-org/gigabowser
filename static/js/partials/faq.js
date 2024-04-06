window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
});

const content = [
  {
    "question": "What is TAMU Datathon Lite?",
    "answer": "TD Lite is a smaller, more beginner friendly version of our main event. It's a one-day event, but it will have everything Datathon normally has including free food, swag, workshops, and prizes!",
    "color": "#98ccfe"
  },
  {
    "question": "When is the event?",
    "answer": "It's on Saturday, April 20th, 2024 between 9 AM and 6 PM. A complete schedule will be available soon!",
    "color": "#b6f9ec"
  },
  {
    "question": "Where is the event?",
    "answer": "The event takes place at the ILCB. Once you enter the building, organizers will be there to guide you to the main room! If you have any questions regarding transportation or parking, please reach out to us on Discord.",
    "color": "#f2fc96"
  },
  {
    "question": "How do I sign up?",
    "answer": "Head over to tamudatathon.com/apply to get started! Admission decisions will be released shortly after registration closes.",
    "color": "#f87d2e"
  },
  {
    "question": "How much does it cost?",
    "answer": "It is completely free! All you need is a laptop and a charger. We will even provide swag, food, Wi-Fi, workspaces, and more during the event.",
    "color": "#bbe575"
  },
  {
    "question": "Who can attend?",
    "answer": "TD Lite is open to any student currently enrolled at Texas A&M who is at least 18 years of age and any Aggie who has graduated within one year of the event. We welcome students from all majors!",
    "color": "#98ccfe"
  },
  {
    "question": "How much do I need to know?",
    "answer": "If you are new to data science, TD Lite is the perfect time and place to learn. We will provide introductory workshops and mentors to guide you throughout the competition. We are committed to helping you build something you can be proud of!",
    "color": "#b6f9ec"
  },
  {
    "question": "What should I bring?",
    "answer": "All you need is a laptop and a charger to get started at TD Lite! You may bring other items such as a pillow or a debugging duck if you wish to. Also make sure to check the weather in case you might need an umbrella :D.",
    "color": "#f2fc96"
  },
  {
    "question": "How do teams work?",
    "answer": "Teams can have up to 4 people. We encourage working with a team, it's more fun! If you don't have a team, don't worry! There will be plenty of time to form one at the event.",
    "color": "#f87d2e"
  },
  {
    "question": "I have another question?",
    "answer": "Send us an email at connect@tamudatathon.com or reach out to us on Discord!",
    "color": "#bbe575"
  },
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

if (document.querySelector(".faqs-container") !== null) {
  document.querySelector(".faqs-container").innerHTML = contentElement;
}

const tracker = document.querySelectorAll(".faqs-item");
const answers = document.querySelectorAll(".faqs-sheet");
const texts = document.querySelectorAll(".faqs-text")
const btns = document.querySelectorAll(".faqs-btn")
let active = false;
let active_num = -1;

const handleIntersection = (entries) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("faqs-show")
        }
    })
}

const observer = new IntersectionObserver(handleIntersection)
for (let i = 0; i < answers.length; i++) {
    observer.observe(answers[i])
}

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