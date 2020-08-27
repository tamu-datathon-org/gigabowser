const DEADLINE_DATE = CONSTANTS.DEADLINE_DATE;
const deadlineSecs = Math.floor(Date.parse(DEADLINE_DATE) / 1000);

const deadlineCheck = () => {
  ETA = deadlineSecs - Math.floor(Date.now() / 1000);
  if (ETA <= 0) {
    $(".countdown-text").css({
      display: "none"
    });
    $(".applications-closed-message").css({
      display: "block"
    });
  }
};

deadlineCheck();
setInterval(deadlineCheck, 1000);