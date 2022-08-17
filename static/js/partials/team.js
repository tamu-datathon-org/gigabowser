class Team extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    height = teamContent.getBoundingClientRect().height; // override default height
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

function cardFlip(e, card) {
  if (e.target.tagName !== "A") {
    card.querySelector('.clue-card-inner').classList.toggle('flipped');
  }
}

document.getElementById("team-content").querySelectorAll('.clue-card').forEach(card => {
  card.onclick = (e) => this.cardFlip(e, card);
});