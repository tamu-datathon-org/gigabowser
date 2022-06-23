class Information extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    halt = 1000;
    super(id, startPx, height, halt, isFirst);
  }
  runScrollDependentBehavior(y) {
    let myPawn = document.getElementById('pawn');
    if(y-this.startPx > 1500) {
      myPawn.style.animation = "pawnMove 1s ease";
      myPawn.style.top = "calc(100% - 75px)";
      myPawn.style.left = "calc(50vw - 3px + 20px)";
    }
    else {
      myPawn.style.animation = "";
      myPawn.style.top = "calc(100% - 85px)";
      myPawn.style.left = "calc(50vw - 3px)";
    }
  }
  run(y) {
    super.run(y);
  }

  
}

// put interaction based code under here (button clicks, hover event, etc)