/*
 Controls a countdown timer shown for registration on the TD 2020 Landing page.
 It took a lot of hacks to make the code work well enough to be an actual timer.
 Here you'll find janky code written by a sleepy college junior who wanted to make a good looking countdown.
*/

$(document).ready(function () {
  var countdownStrings = []
  const DEADLINE_DATE = CONSTANTS.DEADLINE_DATE;
  const deadlineSecs = Math.floor( Date.parse(DEADLINE_DATE) / 1000 );

  if (ETA > 0) {
      for (let i = 0; i < CONSTANTS.COUNTDOWN_REFRESH; i++) {
          const countdownStr = getCountdownStrFromSeconds(deadlineSecs - Math.floor(Date.now() / 1000) - i);
          if (countdownStr !== undefined) {
              countdownStrings.push(countdownStr);
          }
      }
  
      new Typed('#countdown-typed', {
          strings: countdownStrings,
          typeSpeed: 0,
          backSpeed: 45,
          backDelay: 490,
          loop: true,
          smartBackspace: true,
          onStringTyped: (i, self) => {
              self.strings[i] = getCountdownStrFromSeconds(deadlineSecs - Math.floor(Date.now() / 1000) - self.strings.length);
              // Reset speeds on loop
              if (i == (self.strings.length - 1)) {
                  self.typeSpeed = 10;
                  self.backSpeed = 10;
              } else {
                  self.typeSpeed = 45;
                  self.backSpeed = 45;
              }
          }
      });
  }
});

const getCountdownStrFromSeconds = (secs) => {
  secs = Math.max(secs, 0);
  let info = {};
  info.days = Math.floor(secs / 86400);
  secs = secs % 86400;
  info.hours = Math.floor(secs / 3600);
  secs = secs % 3600;
  info.minutes = Math.floor(secs / 60);
  secs = secs % 60;
  info.secs = Math.floor(secs);
  return getFormattedCountdown(info);
}

const getFormattedCountdown = (info) => {
  return `${info.days}d ${info.hours}h ${info.minutes}m ${info.secs}s `;
}