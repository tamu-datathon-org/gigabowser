var id = null;

async function flash(on) {
    $("#tv-blip").css("display", "flex");
    var tv = $("#tv-screen")
    var width = on ? 1 : 250;
    clearInterval(id);
    id = setInterval(move, 1);
    function move () {
        if (width > 250 || width <= 0) {
            clearInterval(id);
            $("#tv-blip").css("display", "none");
            //on ?  : $("#question-"+index).css("display", "flex");
        }
        tv.css("width", width.toString()+"px");
        on ? width += 2 : width -= 2;
    }
}

$('#eventCarousel').on('slid.bs.carousel', function (e) {
  var idx = $(e.relatedTarget).index();
  //console.log(idx);
  //console.log(e.direction);
  for (var i = 0; i < $('.carousel-item').length; i++) {
    $("#event-info-"+i).css("display", "none");
  }
  $("#event-info-"+idx).css("display", "block");
})