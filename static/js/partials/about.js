class About extends Section {
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
    
    /*if(y>startPixel){
    
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

  
  }*/
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