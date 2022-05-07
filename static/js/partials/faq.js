class Faq extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    height = 1345; // override default height
    super(id, startPx, height, halt, isFirst);
  }
  runScrollDependentBehavior(y) {
    // put scroll dependent behavior here
  }
  run(y) {
    super.run(y);
  }
}

// put interaction based code under here (button clicks, hover event, etc)
const questions_and_answers = [
  [
    "WHAT IS TAMU DATATHON",
    "A datathon is where you build your analytics skill set and create data driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, and more. We’ll take care of you while you learn & create!",
  ],
  [
    "WHERE IS THE EVENT",
    "Datathon will be hybrid (Both in-person and virtual)! If you are coming in-person, the event will be hosted at the Hall of Champions in Kyle Field.",
  ],
  [
    "WHO CAN ATTEND",
    "TAMU Datathon is open to any enrolled undergraduate or graduate student who is at least 18 years of age, as well as people who have graduated within 1 year from the event. We welcome students from all across the world and from all majors!",
  ],
  [
    "HOW MUCH DOES IT COST",
    "It’s FREE! All you need is a laptop! (and Wi-Fi for virtual participants)",
  ],
  [
    "HOW MUCH DO I NEED TO KNOW",
    "None! If you’re a beginner to data science, TAMU Datathon is the perfect time and place to learn. We’ll provide introductory coursework and mentors to guide you along your journey to complete a data science project.\nFor our more advanced students, our challenges will peak your interest and allow you to put your skills to the test. We’re committed to helping you build something you can be proud of!",
  ],
  [
    "WHEN IS THE EVENT",
    "October 16-17th, 2021. We will publish a complete schedule in the fall.",
  ],
  [
    "HOW DO I REGISTER",
    "Registration will open on August 1st, 2021 and will close on October 1st, 2021. Admission decisions will be released shortly after the registration period closes.",
  ],
  [
    "HAVE OTHER QUESTIONS?",
    "October 16-17th, 2021. We will publish a complete schedule in the fall.",
  ],
];

const sectionwrapper = document.getElementById("during");
const section_template = Handlebars.compile(
  `<div class="flex-container">
      <div class="flex-item-left">
        <div class="wrapper noselect" id="{{0}}">{{{1}}}</div>
        <div class="answer">
          {{2}}
        </div>
      </div>
      <div class="flex-item-right">
        <div style="display: inline-block" class="wrapper noselect" id="{{3}}">{{{4}}}</div>
        <div class="answer">
          {{5}}
        </div>
      </div>
    </div>`
);

const word_template = Handlebars.compile(`
<div style="display: inline-block;">{{{0}}}</div>
`);

const empty = Handlebars.compile(
  `<div id=q{{0}}l{{1}} style="display: inline-block; margin-top:0.35; width: 0.8em; height: 1.6em;" class="empty"></div>`
);
const mydiv_template = Handlebars.compile(
  `<div class="noselect" style="display: inline-block" id="q{{3}}l{{4}}">
    <div class="tile noselect" id="mydivheader" 
      style="position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.6em;
      height: 1.6em;
      margin-left: 0.25em;
      margin-top: 0.35em;
      color: #044;
      background: #eddabb;
      border-radius: 0.2em;
      cursor: pointer;
      box-shadow: 0.09em 0.09em 0.01em #ad9a7b !important;
      transition: 0.75s;transform: rotateZ({{2}}deg);">
    <div class="tile__letter noselect">{{0}}</div>
    <div class="tile__points noselect">{{1}}</div>
  </div></div>`
);

for (var i = 0; i < questions_and_answers.length; i += 2) {
  section_input = [];

  let tempstuff = "";
  let k = 0;
  questions_and_answers[i][0].split(" ").forEach((jj, m) => {
    if (m != 0) tempstuff += word_template([empty([i, k - 1])]);
    let tempstuff2 = "";
    for (var j = 0; j < jj.length; j++) {
      let letter = jj[j];
      mydiv_input = [];
      mydiv_input[0] = letter;
      mydiv_input[1] = Math.round(Math.random() * (5 - 1) + 1);
      mydiv_input[2] = 10 - Math.round(Math.round(Math.random() * 20));
      if (mydiv_input[2] > -0.7 && mydiv_input[2] < 0.7) mydiv_input[2] -= 2;
      mydiv_input[3] = i;
      mydiv_input[4] = k++;
      tempstuff2 += mydiv_template(mydiv_input);
    }
    tempstuff += word_template([tempstuff2]);
    k++;
  });
  section_input[1] = tempstuff;

  k = 0;
  tempstuff = "";
  questions_and_answers[i + 1][0].split(" ").forEach((jj, m) => {
    if (m != 0) tempstuff += word_template([empty([i + 1, k - 1])]);
    let tempstuff2 = "";
    for (var j = 0; j < jj.length; j++) {
      let letter = jj[j];
      mydiv_input = [];
      mydiv_input[0] = letter;
      mydiv_input[1] = Math.round(Math.random() * (5 - 1) + 1);
      mydiv_input[2] = 10 - Math.round(Math.round(Math.random() * 20));
      if (mydiv_input[2] > -0.7 && mydiv_input[2] < 0.7) mydiv_input[2] -= 2;
      mydiv_input[3] = i + 1;
      mydiv_input[4] = k++;
      tempstuff2 += mydiv_template(mydiv_input);
    }
    tempstuff += word_template([tempstuff2]);
    k++;
  });
  section_input[4] = tempstuff;

  section_input[0] = i;
  section_input[2] = questions_and_answers[i][1];
  section_input[3] = i + 1;
  section_input[5] = questions_and_answers[i + 1][1];

  during.innerHTML += section_template(section_input);
}

document.querySelectorAll(".wrapper").forEach((evt) => {
  evt.addEventListener("mouseover", (e) => {
    Array.from(
      document.getElementById(`${evt.id}`).getElementsByClassName("tile")
    ).forEach((thing) => {
      thing.style.transform = "rotateZ(0deg)";
    });
  });
});

var funcs = [];
var curfunc = 0;
function createfunction(i, j) {
  return function () {
    window.addEventListener("resize", () => {
      setTimeout(function () {
        let rect0 = document
          .getElementById(`q${i}l${j - 1}`)
          .getBoundingClientRect();
        let rect1 = document
          .getElementById(`q${i}l${j}`)
          .getBoundingClientRect();
        let rect2 = document
          .getElementById(`q${i}l${j + 1}`)
          .getBoundingClientRect();
        if (
          Math.abs(rect1.top - rect2.top) > 8 ||
          Math.abs(rect0.top - rect1.top) > 8
        ) {
          document.getElementById(`q${i}l${j}`).style.width = "0px";
        } else {
          document.getElementById(`q${i}l${j}`).style.width = "0.8em";
        }
      }, 3000);
    });
  };
}

for (var i = 0; i < questions_and_answers.length; i += 1) {
  for (var j = 0; j < questions_and_answers[i][0].length; j += 1) {
    if (questions_and_answers[i][0][j] !== " ") {
      let letterblock = document.getElementById(`q${i}l${j}`);
      letterblock.onmousedown = function (event) {
        event.preventDefault();
        let shiftX = event.clientX - letterblock.getBoundingClientRect().left;
        let shiftY = event.clientY - letterblock.getBoundingClientRect().top;
        if (letterblock.style.position != "absolute") {
          var clone = letterblock.cloneNode(true);
          clone.style.visibility = "hidden";
          clone.id = "badelem";
          letterblock.after(clone);
        }
        letterblock.style.position = "absolute";
        letterblock.style.zIndex = 1000;
        document.body.append(letterblock);
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
          letterblock.style.left = pageX - shiftX + "px";
          letterblock.style.top = pageY - shiftY + "px";
        }
        function onMouseMove(event) {
          event.preventDefault();
          moveAt(event.pageX, event.pageY);
        }
        document.addEventListener("mousemove", onMouseMove);
        letterblock.onmouseup = function () {
          document.removeEventListener("mousemove", onMouseMove);
          letterblock.onmouseup = null;
        };
      };
      letterblock.ondragstart = function () {
        return false;
      };
    } else {
      funcs[curfunc] = createfunction(i, j);
      ++curfunc;
    }
  }
}

for (var j = 0; j < curfunc; j++) {
  funcs[j]();
}
