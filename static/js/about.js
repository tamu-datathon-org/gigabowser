$(document).ready(async function() {
    let imgs = ['bargraph.png','piegraph.png'];
    var idx = 1;
    setInterval(function() {
        $('.about-img').fadeIn(1500, function () {
            $(this).delay(3000).fadeOut(1500);
        });
        idx == imgs.length - 1 ? idx = 0 : idx++;
        $('.about-img').attr('src', '/static/img/graphics/'+imgs[idx]);
    }, 6000);
})