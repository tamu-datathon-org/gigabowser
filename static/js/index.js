let currentIndustryId = undefined;
$('.industry-modal-trigger').click((e) => {
  const industryId = $(e.target).attr('industry-id');
  if(currentIndustryId) {
    $(`#${currentIndustryId}`).removeClass('active');
    $(`#${currentIndustryId}`).removeClass('show');
    $(`#${currentIndustryId}-tab`).removeClass('active');
  }
  currentIndustryId = industryId;
  $(`#${currentIndustryId}`).addClass('active');
  $(`#${currentIndustryId}`).addClass('show');
  $(`#${currentIndustryId}-tab`).addClass('active');
});