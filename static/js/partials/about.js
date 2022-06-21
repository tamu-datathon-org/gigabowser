class About extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    // height = 1200; // override default height
    halt = 3000;
    window.startPixel = startPx + 962;
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
    let down = false;
    let dist = 0;

    
    if(y>startPixel){
      /*if (document.readyState === 'complete') {
        count = 23;
      }*/
    //start logic
    if(y > previous_y){down = true;}else{down = false;}


    //Jenga Logic
    dist = Math.abs(y - previous_y);
    
    for(let x = 0; x < dist; x++){


      tick += 1;
      if(tick >= 80){
        
        tick = 0;
      if(animation_value ==0){
        if(down){
          console.log('playing');
            if(blocks[count].classList.contains("jenga__block")){
            let shift = blocks[count].style.y - document.getElementById("jenga-layer0").style.y;
           // console.log(shift);
            blocks[count].style.opacity = "1";
            blocks[count].style.transform = "translateZ(-"+shift+"px)";
          }
          if(count < blocks.length-1){++count;}else{
            ++animation_value;
          }
         }
      }else if(animation_value == 1){

      }
      


      }
    }
      


   }else if(y < startPixel-600){
    this.resetAnimation();

      for(let i = 0; i < blocks.length; i++){
        blocks[i].style.transform = "translateZ(1000px)";
        blocks[i].style.opacity = "0";
        count = 0;
      }
   
    
   }

   previous_y = y;

  }



  resetAnimation(){
    animation_value = 0;
  }


  run(y) {
    super.run(y);
  }

}






// put interaction based code under here (button clicks, hover event, etc)
/*const textTitle = document.getElementById('jenga-layer1')

const aboutText = () =>{
  console.log(textTitle.offsetWidth)
}
setInterval(aboutText, 1000)*/