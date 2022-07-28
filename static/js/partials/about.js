/*class About extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    // height = 1200; // override default height
    halt = 1000;
    window.startPixel = startPx + 962;
    window.footerPixel = startPixel + 2000;
    window.footerPageWidth = 0;

    window.haltPixel = halt;
    window.tick = 0;
    window.count = 0;
    window.previous_y = startPixel;
    window.endPixel = 0;
    window.animation_value = 0;
    console.log('refreshed');
    super(id, startPx, height, halt, isFirst);  

    
  }
  runScrollDependentBehavior(y) {
    window.yvalue = y;
    const blocks = document.getElementsByClassName('jenga__block');
    const text = document.getElementById('about-text');
    if(y>=footerPixel && animation_value == 1){

      console.log('footer');
      //++animation_value;
    }
    if(y>=startPixel && animation_value== 0){
      var animationID;
      //start animation
      const animationmethod = ()=>{
        //console.log(count);
        if(count >= blocks.length-1){
          clearInterval(animationID);
        }
        if(blocks[count].classList.contains("jenga__block")){
          let shift = blocks[count].style.y - document.getElementById("jenga-layer0").style.y;
         // console.log(shift);
          blocks[count].style.opacity = "1";
          blocks[count].style.transform = "translateZ(-"+shift+"px)";
        }
        text.style.opacity = count/20;
        ++count;
      };
      animationID = setInterval(animationmethod,50);
      animation_value += 1;
    }else if(y < startPixel-600){
      this.resetAnimation();
        text.style.opacity =0;
        for(let i = 0; i < blocks.length; i++){
          blocks[i].style.transform = "translateZ(1000px)";
          blocks[i].style.opacity = "0";
          count = 0; 
        }
     }
    
}



  resetAnimation(){
    animation_value = 0;
  }


  run(y) {
    super.run(y);
  }

}*/

// https://stackoverflow.com/a/5354536
function isScrolledIntoView(elem)
{
    var rect = elem.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

//about section logic
const AboutSection = document.querySelector("#about")
const JengaBase = document.querySelector("#jenga-layer0")
let triggerPixel = AboutSection.getBoundingClientRect().top + document.documentElement.scrollTop;

const blocks = document.getElementsByClassName('jenga__block');

let animation_value = 0;
let count = 0;
window.addEventListener("scroll", event => {
  triggerPixel = AboutSection.getBoundingClientRect().top + document.documentElement.scrollTop;
  //creates a global variable of the scrollValue
  window.scrollVal = document.documentElement.scrollTop;

  //if the scrollVal passes or equals to the trigger Pixel then play animation.
  if((scrollVal >= triggerPixel-100||isScrolledIntoView(JengaBase)) && animation_value == 0){
    animation_value += 1;
    //trigger logic
    var animationID;
    //start animation
    const animationmethod = ()=>{
      //console.log(count);
      if(count >= blocks.length-1){
        clearInterval(animationID);
      }
      if(blocks[count].classList.contains("jenga__block")){
        let shift = blocks[count].style.y - document.getElementById("jenga-layer0").style.y;
        // console.log(shift);
        blocks[count].style.opacity = "1";
        blocks[count].style.transform = "translateZ(-"+shift+"px)";
      }
      ++count;
    };
    animationID = setInterval(animationmethod,50);
    animation_value += 1;
  }else if(scrollVal < triggerPixel-600){
      animation_value = 0;
      for(let i = 0; i < blocks.length; i++){
        blocks[i].style.transform = "translateZ(1000px)";
        blocks[i].style.opacity = "0";
        count = 0; 
      }
   }
  }
);

