const sponsors = require("./SponsorVariables");
const IndustryVariables = {
  industryModalVariables: [{
    industryName: "Technology",
    industryId: "industry-technology",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-technology")),
    industryImgPath: "./static/img/icons/technology.svg"
  }, {
    industryName: "Energy",
    industryId: "industry-energy",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-energy")),
    industryImgPath: "./static/img/icons/energy.svg"
  }, {
    industryName: "Consulting",
    industryId: "industry-consulting",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-consulting")),
    industryImgPath: "./static/img/icons/consulting.svg"
  }, {
    industryName: "Finance",
    industryId: "industry-finance",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-finance")),
    industryImgPath: "./static/img/icons/finance.svg"
  }, {
    industryName: "Transportation",
    industryId: "industry-transportation",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-transportation")),
    industryImgPath: "./static/img/icons/transportation.svg"
  }, {
    industryName: "Education",
    industryId: "industry-education",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-education")),
    industryImgPath: "./static/img/icons/education.svg"
  }, {
    industryName: "Sports",
    industryId: "industry-sports",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-sports")),
    industryImgPath: "./static/img/icons/sports.svg"
  }, {
    industryName: "Healthcare",
    industryId: "industry-healthcare",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-healthcare")),
    industryImgPath: "./static/img/icons/healthcare.svg"
  }, {
    industryName: "Aerospace",
    industryId: "industry-aerospace",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-aerospace")),
    industryImgPath: "./static/img/icons/aerospace.svg"
  }, {
    industryName: "Defense",
    industryId: "industry-defense",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-defense")),
    industryImgPath: "./static/img/icons/defense.svg"
  }, {
    industryName: "Retail",
    industryId: "industry-retail",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-retail")),
    industryImgPath: "./static/img/icons/retail.svg"
  }]
};

module.exports = IndustryVariables;