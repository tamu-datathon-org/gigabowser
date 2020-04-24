const sponsors = require("./SponsorVariables");

// NOTE: Extra Industry Variable (Education)
//       appended to list to resolve Technology repeat problem.

const IndustryVariables = {
  industryModalVariables: [{
    industryName: "Technology",
    industryId: "industry-technology",
    industryDescription: `
      <p>Can you determine sentiment from a tweet, predict a Facebook check-in, or generate appropriate tags for a YouTube video?</p>
      <h6>Kaggle Competitions:</h6>
      <ul>
        <li><a href="https://www.kaggle.com/c/tweet-sentiment-extraction" target="_blank">Tweet Sentiments</a></li>
        <li><a href="https://www.kaggle.com/c/facebook-v-predicting-check-ins" target="_blank">Check-In Prediction</a></li>
        <li><a href="https://www.kaggle.com/c/youtube8m" target="_blank">Tag Prediction</a></li>
      <ul>
    `,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-technology")),
    industryImgPath: "./static/img/icons/technology.svg"
  }, {
    industryName: "Energy",
    industryId: "industry-energy",
    industryDescription: `
      <p>Model a building’s energy consumption, gas prices, or oil accidents!</p>
      <h6>Kaggle Competitions:</h6>
      <ul>
        <li><a href="https://www.kaggle.com/c/ashrae-energy-prediction" target="_blank">Energy Prediction</a></li>
        <li><a href="https://www.kaggle.com/mabusalah/brent-oil-prices" target="_blank">Oil Prices</a> </li>
        <li><a href="https://www.kaggle.com/usdot/pipeline-accidents" target="_blank">Pipeline Accidents</a></li>
      </ul>
    `,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-energy")),
    industryImgPath: "./static/img/icons/energy.svg"
  }, {
    industryName: "Consulting",
    industryId: "industry-consulting",
    industryDescription: `
      <p>Predict property rental prices or find the most accurate system to predict chess outcomes!</p>
      <h6>Kaggle Competitions:</h6>
      <ul>
        <li><a href="https://www.kaggle.com/c/deloitte-western-australia-rental-prices" target="_blank">Rental Prices</a></li>
        <li><a href="https://www.kaggle.com/c/ChessRatings2" target="_blank">Chess Outcomes</a></li>
      </ul>
    `,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-consulting")),
    industryImgPath: "./static/img/icons/consulting.svg"
  }, {
    industryName: "Finance",
    industryId: "industry-finance",
    industryDescription: `
    <p>Can you predict end of day stock returns given noisy data?</p>
    <h6>Kaggle Competitions:</h6>
    <ul>
        <li><a href="https://www.kaggle.com/c/two-sigma-financial-modeling" target="_blank">Two Sigma</a></li>
        <li><a href="https://www.kaggle.com/c/the-winton-stock-market-challenge" target="_blank">Winton Stock Returns</a></li>
    </ul>
`,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-finance")),
    industryImgPath: "./static/img/icons/finance.svg"
  }, {
    industryName: "Transportation",
    industryId: "industry-transportation",
    industryDescription: `
    <p>Try to identify distracted drivers, work with self-driving cars, or reduce vehicle manufacturing time.</p>
    <h6>Kaggle Competitions:</h6>
    <ul>
        <li><a href="https://www.kaggle.com/c/state-farm-distracted-driver-detection" target="_blank">Distraction Detection</a></li>
        <li><a href="https://www.kaggle.com/c/carvana-image-masking-challenge" target="_blank">Vehicle Recognition</a></li>
        <li><a href="https://www.kaggle.com/c/mercedes-benz-greener-manufacturing" target="_blank">Optimize Manufacturing</a></li>
    </ul>
`,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-transportation")),
    industryImgPath: "./static/img/icons/transportation.svg"
  }, {
    industryName: "Education",
    industryId: "industry-education",
    industryDescription: `
    <p>Compare different countries' educational systems, identify college debt trends, or discover which majors & universities have the best ROI! </p>
    <h6>Kaggle Competitions:</h6>
    <ul>
        <li><a href="https://www.kaggle.com/theworldbank/education-statistics" target="_blank">Education Statistics</a></li>
        <li><a href="https://www.kaggle.com/kaggle/college-scorecard" target="_blank">College Debt</a></li>
        <li><a href="https://www.kaggle.com/wsj/college-salaries" target="_blank">College Salaries</a></li>
    </ul>
`,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-education")),
    industryImgPath: "./static/img/icons/education.svg"
  }, {
    industryName: "Sports",
    industryId: "industry-sports",
    industryDescription: `
    <p>Be a true MVP and predict football yardage, injuries, or suggest rule changes to improve safety!</p>
    <h6>Kaggle Competitions:</h6>
    <ul>
        <li><a href="https://www.kaggle.com/c/nfl-big-data-bowl-2020" target="_blank">NFL Yardage Prediction</a></li>
        <li><a href="https://www.kaggle.com/c/NFL-Punt-Analytics-Competition" target="_blank">NFL Punt Analysis</a></li>
    </ul>
    `,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-sports")),
    industryImgPath: "./static/img/icons/sports.svg"
  }, {
    industryName: "Healthcare",
    industryId: "industry-healthcare",
    industryDescription: `
    <p>Detect diabetic retinopathy to stop blindness or take a stab at modeling COVID-19!</p>
    <h6>Kaggle Competitions:</h6>
    <ul>
        <li><a href="https://www.kaggle.com/c/aptos2019-blindness-detection" target="_blank">Blindness Detection</a></li>
        <li><a href="https://www.kaggle.com/sudalairajkumar/novel-corona-virus-2019-dataset" target="_blank">Coronavirus Dataset</a></li>
    </ul>
    `,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-healthcare")),
    industryImgPath: "./static/img/icons/healthcare.svg"
  }, {
    industryName: "Aerospace",
    industryId: "industry-aerospace",
    industryDescription: `
    <p>Predict flight delays, space shuttle part failure, airplane crashes, and so much more!</p>
    <h6>Kaggle Competitions:</h6>
    <ul>
        <li><a href="https://www.kaggle.com/fabiendaniel/predicting-flight-delays-tutorial" target="_blank">Flight Delays</a></li>
        <li><a href="https://www.kaggle.com/c/dat31-shuttle/notebooks" target="_blank">Shuttle Disaster</a></li>
        <li><a href="https://www.kaggle.com/c/reducing-commercial-aviation-fatalities" target="_blank">Aviation Fatalities</a></li>
    </ul>
    `,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-aerospace")),
    industryImgPath: "./static/img/icons/aerospace.svg"
  }, {
    industryName: "Insurance",
    industryId: "industry-insurance",
    industryDescription: `
    <p>Find the right pricing for an insurance plan, predict customer retention, and classify risk!</p>
    <h6>Kaggle Competitions:</h6>
    <ul>
        <li><a href="https://www.kaggle.com/c/ClaimPredictionChallenge" target="_blank">Claim Prediction</a></li>
        <li><a href="https://www.kaggle.com/c/deloitte-churn-prediction" target="_blank">Customer Loyalty</a></li>
        <li><a href="https://www.kaggle.com/c/prudential-life-insurance-assessment" target="_blank">Risk Assessment</a></li>
    </ul>
    `,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-insurance")),
    industryImgPath: "./static/img/icons/insurance.svg"
  }, {
    industryName: "Retail",
    industryId: "industry-retail",
    industryDescription: `
    <p>Build product recommendation engines, detect fraud, personalize marketing, manage inventory, and more!</p>
    <h6>Kaggle Competitions:</h6>
    <ul>
        <li><a href="https://www.kaggle.com/c/santander-product-recommendation" target="_blank">Product Recommendation</a></li>
        <li><a href="https://www.kaggle.com/c/ieee-fraud-detection" target="_blank">Fraud Detection</a></li>
        <li><a href="https://www.kaggle.com/c/instacart-market-basket-analysis" target="_blank">Market Analysis</a></li>
    </ul>
    `,
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-retail")),
    industryImgPath: "./static/img/icons/retail.svg"
  }, {
    industryName: "Education",
    industryId: "industry-education",
    industryDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus id est nec molestie. Phasellus sit amet finibus enim. Sed aliquet mauris a velit ultricies, et ultricies velit malesuada.",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-education")),
    industryImgPath: "./static/img/icons/education.svg"
  }]
};

module.exports = IndustryVariables;