class Information extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    halt = 1000;
    console.log("hi");
    super(id, startPx, height, halt, isFirst);
  }

  runScrollDependentBehavior(y) {}
  run(y) {
    super.run(y);
  }
}

// put interaction based code under here (button clicks, hover event, etc)
let myPawn = document.getElementById("newPawn");
let pawnMoved = false;

function movePawn() {
  if (!pawnMoved) {
    myPawn.style.animation = "pawnMoveForward 1s ease";
    myPawn.style.top = "calc(-1px)";
    myPawn.style.left = "calc(15px)";
    pawnMoved = true;
  } else {
    myPawn.style.animation = "pawnMoveBackward 1s ease";
    myPawn.style.top = "calc(-10px)";
    myPawn.style.left = "calc(-5px)";
    pawnMoved = false;
  }
}