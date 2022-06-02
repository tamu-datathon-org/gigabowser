/**
 * DO NOT MAKE CHANGES TO THIS FILE
 */

const transitionHeight = 100;
const defaultHalt = 500;

let prevScrollY = 0;
let scrollY = 0;

const splash = new Splash("splash", 0, window.innerHeight, defaultHalt, true);
const information = new Information("information", splash.halt);
const faq = new Faq("faq", information.startPx + information.height);
const sponsors = new Sponsors("sponsors", faq.startPx + faq.height);
const team = new Team("team", sponsors.startPx + sponsors.height);
const events = new EventsSection("events", team.startPx + team.height);
const about = new About("about", events.startPx + events.height);

const bodyHeight = about.startPx + about.height * 2 - 200;
document.body.style.height = bodyHeight + "px";

const scrollToSplash = () => { window.scrollTo(0, 0) }
const scrollToInformation = () => { window.scrollTo(0, information.startPx + information.height) }
const scrollToFaq = () => { window.scrollTo(0, faq.startPx + faq.height) }
const scrollToSponsors = () => { window.scrollTo(0, sponsors.startPx + sponsors.height) }
const scrollToTeam = () => { window.scrollTo(0, team.startPx + team.height) }
const scrollToEvents = () => { window.scrollTo(0, events.startPx + events.height) }
const scrollToAbout = () => { window.scrollTo(0, about.startPx + about.height) }

const handleScroll = () => {
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
scrollTo("information")

// need to add a handler for window resizing to update
// the section heights
// maybe on resize handler for Seciton class that asks
// each subclass for their new custom height