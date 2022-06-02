
class About extends Section {


  
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    // height = 1200; // override default height
    height = 1000;
    halt = 3000;
    window.tick = 0;
    window.count = 0;
    window.previous_y = startPx;
    window.animationPx = startPx + 1185;
    super(id, startPx, height, halt, isFirst);

  }
  
  

  runScrollDependentBehavior(y) {
    // put scroll dependent behavior here
    let startPx = animationPx;
    let endPx = 11300;
    let start_frame = 0;
    let down = false;
    let dist = 0;
    const b1 = document.getElementsByClassName("block");
    const b2 = document.getElementsByClassName("block2");
    const blocks = this.getBlockList(b1,b2);
    const text = document.getElementsByClassName("text")[0];
    console.log(y);
    if(y>startPx) {
      
    document.getElementsByClassName('jenga')[0].style.opacity = '1';

    
    if(y > previous_y){down = true;}else{down = false;}
    dist = Math.abs(y - previous_y);
    
    for(let x = 0; x < dist; x++){


    tick += 1;
    if(tick >= 80){
      tick = 0;
    
      //scroll up logic
      if(!down){
        if(y < endPx){
        if(blocks[count].classList.contains("block")){
          blocks[count].style.transform = "translateZ(+20em)";
        }else{
          blocks[count].style.transform = "translateZ(+20em) translateY(-6em)";
        }
        --count;
      }
      //down logic
      }else{
        if(blocks[count].classList.contains("block")){
          blocks[count].style.transform = "translateZ(-150em)";
        }else{
          blocks[count].style.transform = "translateZ(-150em) translateY(-6em)";
        }
        ++count;
      }

      if(count >= blocks.length){
        --count;
      }else if(count < 0){
        ++count;
      }
      

      
    }

  }

    

    //if y is less than startPx
    }else if(y<startPx){
      document.getElementsByClassName('jenga')[0].style.opacity = '0';
    }

    previous_y = y;
  }

  getBlockList(b1,b2)
  {
    const list = [];
    let i1 = 0;
    let i2 = 0;
    let count = 0;
    let alternate = false;

    for(let i = 0; i < b1.length+ b2.length; i++){
      if(!alternate){
        list.push(b1[i1]);
        i1 += 1;
      }else{
        list.push(b2[i2]);
        i2 += 1;
      }
      ++count;
      if(count % 3 == 0){
      alternate = !alternate;
      }
    }

    return list;



  }

  createBackground(){
    const colors = ["#FFEBCC","#FFA305","#00C1F3","#FF00C7"];
    const numBlocks = 5;
    const blocks = [];

    for(let i = 0; i < numBlocks; i++){
      let block = document.createElement("div");
      block.classList.add("block");
      block.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
      block.style.top = Math.floor(Math.random()*100) + "vh";
      block.style.left = Math.floor(Math.random()*100) + "vw";
      block.style.transform = "scale(${Math.random()})";
      block.style.width = "${Math.random()}em";
      block.style.height = block.style.width;

      blocks.push(block);
      document.body.append(block);
    }

    blocks.forEach((el,i,ra)=>{
      let to = {
        x: Math.random() * (i%2 === 0 ? -11 : 11), y: Math.random() * 12};

      let anim = el.animate(
        [
          { transform: "translate(0,0)"},
          { transform: "translate(" + to.x + "rem," + to.y + "rem)"}
        ],
        {duration: (Math.random()+1)*2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"}
      );
      });
  }

  

  


  run(y) {
    super.run(y);
  }

}

// put interaction based code under here (button clicks, hover event, etc)