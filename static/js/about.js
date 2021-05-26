let imgs = ["bargraph.png", "piegraph.png"];
var idx = 0;

function loop_img() {
  $(".about-img").attr("src", "/static/img/graphics/" + imgs[idx]).delay(4000).fadeTo(2000, 0, function() {
    idx == imgs.length - 1 ?
      (idx = 0) :
      idx++;
    $(".about-img").attr("src", "/static/img/graphics/" + imgs[idx]).fadeTo(2000, 1, function() {});
    loop_img();
  });
}

$(document).ready(async function() {
  loop_img();
});