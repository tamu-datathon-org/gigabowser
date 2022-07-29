class Footer extends Section {
  constructor(id, startPx, height, halt = defaultHalt, isFirst = false) {
    // height = 1200;  override default height
    window.startPix = startPx + 900;
    window.animation_val = 0;
    window.ct = 0;
    super(id, startPx, height, halt, isFirst);
  }

  test() {
    console.log("hi");
  }

  runScrollDependentBehavior(y) {
    const textBox = document.getElementById("Footer__Text");
    const instagram = document.getElementById("card-instagram");
    const facebook = document.getElementById("card-facebook");
    const twitter = document.getElementById("card-twitter");
    const github = document.getElementById("card-github");
    const linkedin = document.getElementById("card-linkedin");
    const medium = document.getElementById("card-medium");

    if (y > startPix && animation_val == 0) {
      console.log("test");
      var animationID;
      const animationMethod = () => {
        if (medium.style.opacity > 1) {
          console.log("stop");
          clearInterval(animationID);
        }

        textBox.style.opacity = ct / 20;
        instagram.style.opacity = ct / 20;
        facebook.style.opacity = ct / 20;
        twitter.style.opacity = ct / 20;
        github.style.opacity = ct / 20;
        linkedin.style.opacity = ct / 20;
        medium.style.opacity = ct / 20;

        ++ct;
      };

      animationID = setInterval(animationMethod, 50);
      animation_val += 1;
    } else if (y < startPix - 600) {
      textBox.style.opacity = 0;
      instagram.style.opacity = 0;
      facebook.style.opacity = 0;
      twitter.style.opacity = 0;
      github.style.opacity = 0;
      linkedin.style.opacity = 0;
      medium.style.opacity = 0;

      ct = 0;
      animation_val = 0;
    }
    // put scroll dependent behavior here
  }
  run(y) {
    super.run(y);
  }
}