class Faq extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    // height = 1200; // override default height
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

const values = [
  { letter: "A", value: 1 },
  { letter: "B", value: 3 },
  { letter: "C", value: 3 },
  { letter: "D", value: 2 },
  { letter: "E", value: 1 },
  { letter: "F", value: 4 },
  { letter: "G", value: 2 },
  { letter: "H", value: 4 },
  { letter: "I", value: 1 },
  { letter: "J", value: 8 },
  { letter: "K", value: 5 },
  { letter: "L", value: 1 },
  { letter: "M", value: 3 },
  { letter: "N", value: 1 },
  { letter: "O", value: 1 },
  { letter: "P", value: 3 },
  { letter: "Q", value: 9 },
  { letter: "R", value: 1 },
  { letter: "S", value: 1 },
  { letter: "T", value: 1 },
  { letter: "U", value: 1 },
  { letter: "V", value: 4 },
  { letter: "W", value: 4 },
  { letter: "X", value: 8 },
  { letter: "Y", value: 4 },
  { letter: "Z", value: 9 },
];
const target = document.querySelectorAll(".scrabble");

//creates span for each character
const results = Splitting({ target: target, by: "chars" });

makeTiles();

//a letter is styled as a tile, punctuation is left as it is.
function makeTiles() {
  for (const item of results) {
    for (const letterSpan of item.chars) {
      $(letterSpan).addClass("tile");
      addValue(letterSpan);
      $(letterSpan).addClass("show");
    }
  }
}

function addValue(span) {
  const letter = $(span).attr("data-char").toUpperCase();
  for (const element of values) {
    if (element.letter === letter) {
      const valueSpan = document.createElement("span");
      $(valueSpan).text(element.value);
      $(valueSpan).addClass("value");
      $(span).append(valueSpan);
      break;
    }
  }
}

$(function () {
  $(".faq-list")
    .find(".accordion-toggle")
    .click(function () {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".scrabble").toggleClass("active");
      $(".faq-list .accordion-content")
        .not($(this).next())
        .slideUp("fast")
        .removeClass("open");
      $(".faq-list .accordion-toggle")
        .not(jQuery(this))
        .removeClass("active-tab")
        .find(".scrabble")
        .removeClass("active");
    });
});
