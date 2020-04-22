const sponsors = require("./SponsorVariables");
const IndustryVariables = {
  industryModalVariables: [{
    industryName: "Technology",
    industryId: "industry-technology",
    industryDescription: "Can you determine sentiment from a tweet, predict a Facebook check-in, or generate appropriate tags for a YouTube video? <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/tweet-sentiment-extraction\" target=\"_blank\">Tweet Sentiments</a> <a href=\"https://www.kaggle.com/c/facebook-v-predicting-check-ins\" target=\"_blank\">Check-In Prediction</a> <a href=\"https://www.kaggle.com/c/youtube8m\" target=\"_blank\">Tag Prediction</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-technology")),
    industryImgPath: "./static/img/icons/technology.svg"
  }, {
    industryName: "Energy",
    industryId: "industry-energy",
    industryDescription: "Model a building’s energy consumption, gas prices, or oil accidents! <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/ashrae-energy-prediction\" target=\"_blank\">Energy Prediction</a> <a href=\"https://www.kaggle.com/mabusalah/brent-oil-prices\" target=\"_blank\">Oil Prices</a> <a href=\"https://www.kaggle.com/usdot/pipeline-accidents\" target=\"_blank\">Pipeline Accidents</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-energy")),
    industryImgPath: "./static/img/icons/energy.svg"
  }, {
    industryName: "Consulting",
    industryId: "industry-consulting",
    industryDescription: "Predict property rental prices or find the most accurate system to predict chess outcomes! <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/deloitte-western-australia-rental-prices\" target=\"_blank\">Rental Prices</a> <a href=\"https://www.kaggle.com/c/ChessRatings2\" target=\"_blank\">Chess Outcomes</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-consulting")),
    industryImgPath: "./static/img/icons/consulting.svg"
  }, {
    industryName: "Finance",
    industryId: "industry-finance",
    industryDescription: "Can you predict end of day stock returns given noisy data? <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/two-sigma-financial-modeling\" target=\"_blank\">Two Sigma</a> <a href=\"https://www.kaggle.com/c/the-winton-stock-market-challenge\" target=\"_blank\">Winton Stock Returns</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-finance")),
    industryImgPath: "./static/img/icons/finance.svg"
  }, {
    industryName: "Transportation",
    industryId: "industry-transportation",
    industryDescription: "Try to identify distracted drivers, work with self-driving cars, or reduce vehicle manufacturing time. <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/state-farm-distracted-driver-detection\" target=\"_blank\">Distraction Detection</a> <a href=\"https://www.kaggle.com/c/carvana-image-masking-challenge\" target=\"_blank\">Vehicle Recognition</a> <a href=\"https://www.kaggle.com/c/mercedes-benz-greener-manufacturing\" target=\"_blank\">Optimize Manufacturing</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-transportation")),
    industryImgPath: "./static/img/icons/transportation.svg"
  }, {
    industryName: "Education",
    industryId: "industry-education",
    industryDescription: "Compare different countries' educational systems, identify college debt trends, or discover which majors & universities have the best ROI!  <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/theworldbank/education-statistics\" target=\"_blank\">Education Statistics</a> <a href=\"https://www.kaggle.com/kaggle/college-scorecard\" target=\"_blank\">College Debt</a> <a href=\"https://www.kaggle.com/wsj/college-salaries\" target=\"_blank\">College Salaries</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-education")),
    industryImgPath: "./static/img/icons/education.svg"
  }, {
    industryName: "Sports",
    industryId: "industry-sports",
    industryDescription: "Be a true MVP and predict football yardage, injuries, or suggest rule changes to improve safety! <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/nfl-big-data-bowl-2020\" target=\"_blank\">NFL Yardage Prediction</a> <a href=\"https://www.kaggle.com/c/NFL-Punt-Analytics-Competition\" target=\"_blank\">NFL Punt Analysis</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-sports")),
    industryImgPath: "./static/img/icons/sports.svg"
  }, {
    industryName: "Healthcare",
    industryId: "industry-healthcare",
    industryDescription: "Detect diabetic retinopathy to stop blindness or take a stab at modeling COVID-19! <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/aptos2019-blindness-detection\" target=\"_blank\">Blindness Detection</a> <a href=\"https://www.kaggle.com/sudalairajkumar/novel-corona-virus-2019-dataset\" target=\"_blank\">Coronavirus Dataset</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-healthcare")),
    industryImgPath: "./static/img/icons/healthcare.svg"
  }, {
    industryName: "Aerospace",
    industryId: "industry-aerospace",
    industryDescription: "Predict flight delays, space shuttle part failure, airplane crashes, and so much more! <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/fabiendaniel/predicting-flight-delays-tutorial\" target=\"_blank\">Flight Delays</a> <a href=\"https://www.kaggle.com/c/dat31-shuttle/notebooks\" target=\"_blank\">Shuttle Disaster</a> <a href=\"https://www.kaggle.com/c/reducing-commercial-aviation-fatalities\" target=\"_blank\">Aviation Fatalities</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-aerospace")),
    industryImgPath: "./static/img/icons/aerospace.svg"
  }, {
    industryName: "Insurance",
    industryId: "industry-insurance",
    industryDescription: "Find the right pricing for an insurance plan, predict customer retention, and classify risk! <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/ClaimPredictionChallenge\" target=\"_blank\">Claim Prediction</a> <a href=\"https://www.kaggle.com/c/deloitte-churn-prediction\" target=\"_blank\">Customer Loyalty</a> <a href=\"https://www.kaggle.com/c/prudential-life-insurance-assessment\" target=\"_blank\">Risk Assessment</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-insurance")),
    industryImgPath: "./static/img/icons/insurance.svg"
  }, {
    industryName: "Retail",
    industryId: "industry-retail",
    industryDescription: "Build product recommendation engines, detect fraud, personalize marketing, manage inventory, and more! <br><br>Kaggle Competitions:<br> <a href=\"https://www.kaggle.com/c/santander-product-recommendation\" target=\"_blank\">Product Recommendation</a> <a href=\"https://www.kaggle.com/c/ieee-fraud-detection\" target=\"_blank\">Fraud Detection</a> <a href=\"https://www.kaggle.com/c/instacart-market-basket-analysis\" target=\"_blank\">Market Analysis</a>",
    industryPastSponsors: sponsors.pastSponsors.filter(item => item.industries.includes("industry-retail")),
    industryImgPath: "./static/img/icons/retail.svg"
  }]
};

module.exports = IndustryVariables;