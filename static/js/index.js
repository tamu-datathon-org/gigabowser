$(".industry-modal-trigger").click(e => {
  const industryId = $(e.target).attr("industry-id");
  if (!industryId)
    return;

  $(`.industry-modal-nav > .active`).removeClass("active");
  $(`.tab-content > .active`).removeClass("active");
  $(`.tab-content > .show`).removeClass("show");

  $(`#${industryId}`).addClass("active");
  $(`#${industryId}`).addClass("show");
  $(`#${industryId}-tab`).addClass("active");

  $("#industry-modal").modal("show");
});