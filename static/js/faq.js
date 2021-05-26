function faq_dropdown(index) {
  if ($("#answer-" + index).css("display") == "none") {
    $("#answer-" + index).css("display", "block");
    $("#question-img-" + index).css({
      "-webkit-transform": "rotate(90deg)",
      "-moz-transform": "rotate(90deg)",
      transform: "rotate(90deg)",
      /* For modern browsers(CSS3) */
    });
  } else {
    $("#answer-" + index).css("display", "none");
    $("#question-img-" + index).css({
      "-webkit-transform": "rotate(0deg)",
      "-moz-transform": "rotate(0deg)",
      transform: "rotate(0deg)",
      /* For modern browsers(CSS3) */
    });
  }
}