const {
  app
} = require("../routes");
const GetIPV4 = require("./FetchIPV4");

// config
const IPV4 = GetIPV4();
const IP = IPV4 == "" ?
  "localhost" :
  IPV4;
const PORT = 3000; // process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("App started and listening!");
  console.log(`Local URL  : http://localhost:${PORT}/`);
  console.log(`Network URL: http://${IP}:${PORT}/`);
});