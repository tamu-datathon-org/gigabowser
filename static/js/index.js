const CONSTANTS = {
  DEADLINE_DATE: "2020-10-12T23:59:00-05:00",
  COUNTDOWN_REFRESH: 60
};

$(".industry-modal-trigger").click(e => {
  const industryId = $(e.target).attr("industry-id");
  if (!industryId)
    return;

  e.preventDefault();
  $(`.industry-modal-nav > .active`).removeClass("active");
  $(`.tab-content > .active`).removeClass("active");
  $(`.tab-content > .show`).removeClass("show");

  $(`#${industryId}`).addClass("active");
  $(`#${industryId}`).addClass("show");
  $(`#${industryId}-tab`).addClass("active");

  $("#industry-modal").modal("show");
});

$(".same-page-nav-link").click(e => {
  const scrollToSection = $(e.target).attr("scroll-id");
  if (scrollToSection) {
    e.preventDefault();
    document.querySelector(`#${scrollToSection}`).scrollIntoView({
      behavior: "smooth"
    });
  }
});

tippy(".industry-modal-trigger", {
  sticky: true,
  allowHTML: true,
  theme: "light",
  content: ref => `<p class="industry-icon-tooltip m-0">${ref.getAttribute("industry-title")}</p>`
});

$(".trigger-mail-modal").click(e => {
  $("#mailchimp-modal").modal("show");
});

// ==== team page =====
function showTeamLinks(name) {
  console.log(name);
  $("#"+name).css({
    height: "20%",
    padding: "15px",
  });
}

// ==== faq page =====
function faq_dropdown(index) {
  if ($("#answer-" + index).css("display") == "none") {
    $("#answer-" + index).css("display", "block");
    $("#question-img-" + index).css({
      "-webkit-transform": "rotate(90deg)",
      "-moz-transform": "rotate(90deg)",
      transform: "rotate(90deg)",
    });
    // $("#dropdown-faq-" + index).css("background-color", "#86eace");
  } else {
    $("#answer-" + index).css("display", "none");
    $("#question-img-" + index).css({
      "-webkit-transform": "rotate(0deg)",
      "-moz-transform": "rotate(0deg)",
      transform: "rotate(0deg)",
    });
    // $("#dropdown-faq-" + index).css("background-color", "transparent");
  }
}