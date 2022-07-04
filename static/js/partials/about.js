class About extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    // height = 1200; // override default height
    halt = 1000;
    window.startPixel = startPx + 962;
    window.haltPixel = halt;
    window.tick = 0;
    window.count = 0;
    window.previous_y = startPixel;
    window.endPixel = 0;
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
    dist = Math.abs(y - startPixel);
    
    for(let x = 0; x < dist; x++){


      tick += 1;
      if(tick >= 900){
        
        tick = 0;

      if(!down){
        if(blocks[count].classList.contains("jenga__block")){
          let shift = 2000;
          //console.log(shift);
          blocks[count].style.transform = "translateZ("+shift+"px)";
          

        }
        if(count > 0) --count;


        }else{
        if(blocks[count].classList.contains("jenga__block")){
          let shift = blocks[count].style.y - document.getElementById("jenga-layer0").style.y;
         // console.log(shift);
          blocks[count].style.opacity = "1";
          blocks[count].style.transform = "translateZ(-"+shift+"px)";
        }
        if(count < blocks.length-1) ++count;
       }

       


      }
    }
       // console.log(count);
      //down scroll

      
      //set opacity of the jenga to one

      //shift the jenga high and lower



   }else{
    for(let i = 0; i < blocks.length; i++){
      blocks[i].style.transform = "translateZ(1000px)";
      blocks[i].style.opacity = "0";
      count = 0;
    }
   }

   previous_y = y;

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