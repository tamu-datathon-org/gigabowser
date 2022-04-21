/**
 * DO NOT MAKE CHANGES TO THIS FILE
 */

let prevScrollY = 0;
let scrollY = 0;

const splash = new Splash("splash", 0, window.innerHeight, true);
const information = new Information("information", splash.startPx);
const faq = new Faq("faq", information.height);
const sponsors = new Sponsors("sponsors", faq.startPx + faq.height);
const team = new Team("team", sponsors.startPx + sponsors.height);
const events = new EventsSection("events", team.startPx + team.height);
const about = new About("about", events.startPx + events.height);

const bodyHeight = about.startPx + about.height * 2 - 200;
document.body.style.height = bodyHeight + "px";

function handleScroll() {
  scrollY = window.scrollY;
  splash.run(scrollY);
  information.run(scrollY);
  faq.run(scrollY);
  sponsors.run(scrollY);
  team.run(scrollY);
  events.run(scrollY);
  about.run(scrollY);
  prevScrollY = scrollY;
}

window.addEventListener('scroll', handleScroll);