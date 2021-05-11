
async function toggleTv (on, index) {
    var screen = $("#tv-screen-"+index);
    if (on) { // turn off the tv
        var timeline = new TimelineMax({
            paused: false
        });
          
        timeline
        .to(screen, .2, {
            display: 'flex',
            width: '80%',
            height: '2px',
            background: '#ffffff',
            ease: Power2.easeOut
        })
        .to(screen, .2, {
            display: 'flex',
            width: '0px',
            height: '0px',
            background: '#ffffff'
        });
    }
    else { // turn on the tv
        var timeline = new TimelineMax({
            paused: false
        });
          
        timeline
        .to(screen, .2, {
            display: 'flex',
            width: '0px',
            height: '0px',
            background: '#ffffff'
        })
        .to(screen, .2, {
            display: 'flex',
            width: '80%',
            height: '2px',
            background: '#ffffff',
            ease: Power2.easeOut
        })
        .to(screen, .1, {
            display: 'flex',
            width: '0px',
            height: '0px',
            background: '#ffffff'
        })
        .to($("#answer-"+index), .1, {
            display: 'flex'
        })
    }
}

const showAnswer = async (index) => {
    var answer = $("#answer-"+index);
    if (answer.is(":visible")) { // answer is shown
        answer.css("display", "none");
        //await toggleTv(true, index);
        $("#question-"+index).css("display", "flex");
    } else { // question is shown
        $("#question-"+index).css("display", "none");
        //await toggleTv(false, index);
        if (index <= 5)
            answer.css("font-size", "0.6em");
        if (index == 9)
            answer.css("display", "block");
        else
            answer.css("display", "flex");
        for (var i = 0; i < 9; i++) {
            if (i != index) {
                $("#answer-"+i).css("display", "none");
                $("#question-"+i).css("display", "flex");
                //if ($("#answer-"+i).is(":visible"))
                //    toggleTv(false, i);
            }
        }
    }
}