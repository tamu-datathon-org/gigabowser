$(".same-page-nav-link").click(e => {
  const scrollToSection = $(e.target).attr("scroll-id");
  if (scrollToSection) {
    e.preventDefault();
    document.querySelector(`#${scrollToSection}`).scrollIntoView({ behavior: "smooth" });
  }
});