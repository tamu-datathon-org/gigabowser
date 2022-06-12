class Information extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    super(id, startPx, height, halt, isFirst);
  }
  runScrollDependentBehavior(y) {
    // Self-Note: If my startPx is 500, and the transition is 100px,
    // My real start px is 600px

    let myBoard = document.getElementsByClassName("squareholder")[0];
    let myPawn = document.getElementsByClassName("pawn")[0];
    let challengeIcon = document.getElementsByClassName("king")[0];
    let challengeText = document.getElementsByClassName("kingText")[0];
    let chessTimer = document.getElementsByClassName("scheduleIcon")[0];
    let scheduleText = document.getElementsByClassName("scheduleText")[0];
    let discordIcon = document.getElementsByClassName("discordIcon")[0];
    let discordText = document.getElementsByClassName("discordText")[0];
    let googleMap = document.getElementsByClassName("googleMap")[0];
    let mapText = document.getElementsByClassName("mapText")[0];
    
 
    let boardOpacity = 2*(y-this.startPx-600)/((this.startPx+this.height)/2);
    let pawnOpacity = 2*(y-this.startPx-600)/((this.startPx+this.height)/2);
    if(boardOpacity > 0.75){
      boardOpacity = 0.75;
    }
    myBoard.style.opacity = boardOpacity;
    challengeIcon.style.opacity = pawnOpacity;
    chessTimer.style.opacity = pawnOpacity;
    myPawn.style.opacity = pawnOpacity;

    
    console.log("y:" + y);
    // console.log("startPx: " + this.startPx);
    
    if((y-this.startPx) >= 1000)
    {
      challengeIcon.style.setProperty('pointer-events', 'auto');
    }
    else
    {
      challengeIcon.style.setProperty('pointer-events', 'none');
    }

    if((y-this.startPx) >= 2000)
    {
      myBoard.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');

      challengeIcon.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');
      challengeText.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');

      chessTimer.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');
      scheduleText.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');

      discordIcon.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');
      discordText.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');

      googleMap.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');
      mapText.style.setProperty('transform', 'translate(' + (-1*(y-this.startPx-2000)) + 'px)');


    }
    // resets to default position because it doesn't do that for some reason :)
    else
    {
      myBoard.style.setProperty('transform', 'translate(0px)');
      challengeIcon.style.setProperty('transform', 'translate(0px)');
      challengeText.style.setProperty('transform', 'translate(0px)');

      chessTimer.style.setProperty('transform', 'translate(0px)');
      scheduleText.style.setProperty('transform', 'translate(0px)');

      discordIcon.style.setProperty('transform', 'translate(0px)');
      discordText.style.setProperty('transform', 'translate(0px)');

      googleMap.style.setProperty('transform', 'translate(0px)');
      mapText.style.setProperty('transform', 'translate(0px)');

    }

    // if(y-this.startPx < 3200)
    // {
    //   myPawn.style.backgroundImage = "url(/../static/img/icons/pawnpng.png)";
    // }
    // if(y-this.startPx > 3200)
    // {
    //   myPawn.style.backgroundImage = "url(/../static/img/icons/queenpng.png)";
    // }

    // put scroll dependent behavior here
  }
  run(y) {
    super.run(y);
  }

  
}

// put interaction based code under here (button clicks, hover event, etc)