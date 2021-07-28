$(".event-carousel").slick({
  centerMode: false,
  centerPadding: '40px',
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $(".event-prev"),
  nextArrow: $(".event-next"),
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 990,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 770,
      settings: {
        arrows: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});