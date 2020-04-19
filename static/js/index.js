$(".same-page-nav-link").click(e => {
  const scrollToSection = $(e.target).attr("scroll-id");
  if (scrollToSection)
    $("html, body").animate({
      scrollTop: $(`#${scrollToSection}`).offset().top
    }, 1000);
});