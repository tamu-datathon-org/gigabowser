class Splash extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    // height = 1200; // override default height
    super(id, startPx, height, halt, isFirst);
  }
  runScrollDependentBehavior(y) {
    // put scroll dependent behavior here
    const percent = y / (bodyHeight + 600);
    const left = (percent * document.body.clientWidth) + 45;
    const car = document.getElementById("car");
    car.style.left = left + "px";
  }
  run(y) {
    super.run(y);
  }
}

// put interaction based code under here (button clicks, hover event, etc)