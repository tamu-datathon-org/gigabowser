var id = null;

async function flash(index, on) {
    $("#tv-blip-"+index).css("display", "flex");
    var tv = $("#tv-screen-"+index)
    var width = on ? 1 : 250;
    clearInterval(id);
    id = setInterval(move, 1);
    function move () {
        if (width > 250 || width <= 0) {
            clearInterval(id);
            $("#tv-blip-"+index).css("display", "none");
            // change font if answer too long
            if (index <= 5)
                $("#answer-"+index).css("font-size", "0.6em");
            on ? $("#answer-"+index).css("display", "flex") : $("#question-"+index).css("display", "flex");
        }
        tv.css("width", width.toString()+"px");
        on ? width += 2 : width -= 2;
    }
}

const showAnswer = async (index) => {
    // question is shown
    $("#question-"+index).css("display", "none");
    $("#answer-"+index).css("display", "none");
    // show blip and answer
    await flash(index, true);
    // turn off all other tv's
    for (var i = 0; i < 9; i++) {
        if (i != index) {
            //if ($("#answer-"+i).is(":visible"))
            //    await flash(i, false);
            $("#answer-"+i).css("display", "none");
            $("#tv-blip-"+i).css("display", "none");
            $("#question-"+i).css("display", "flex");
        }
    }
}