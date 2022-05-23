class Team extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    const teamContent = document.getElementById(id);
    height = teamContent.getBoundingClientRect().height; // override default height
    super(id, startPx, height, halt, isFirst);
    teamContent.querySelectorAll('.clue-card').forEach(card => {
      card.onclick = (e) => this.cardFlip(e, card);
    });
  }
  runScrollDependentBehavior(y) {
    // put scroll dependent behavior here
  }
  run(y) {
    super.run(y);
  }
  cardFlip(e, card) {
    card.querySelector('.clue-card-inner').classList.toggle('flipped');
  }
}
// put interaction based code under here (button clicks, hover event, etc)