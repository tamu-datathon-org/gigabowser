class Splash extends Section {
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

allLetterChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

let randomSquares = document.getElementsByClassName("random");
for (let i = 0; i < randomSquares.length; i++) {
  let randomLetter = allLetterChars[Math.floor(Math.random() * allLetterChars.length)];
  randomSquares[i].innerHTML = randomLetter;
}

function hoverByClass(classname,colorover){
	var elms=document.getElementsByClassName(classname);
  var original_color = elms[0].style.backgroundColor;
	for(var i=0;i<elms.length;i++){
		elms[i].onmouseover = function(){
			for(var k=0;k<elms.length;k++){
				elms[k].style.backgroundColor=colorover;
			}
		};
		elms[i].onmouseout = function(){
			for(var k=0;k<elms.length;k++){
				elms[k].style.backgroundColor=original_color;
			}
		};
	}
}
hoverByClass("challenges-hover","#ff7d7d");
hoverByClass("schedule-hover","#ff7d7d");
// hoverByClass("events-hover","#ff7d7d");
hoverByClass("apply-hover","#ff7d7d");
