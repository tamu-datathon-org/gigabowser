const { app } = require("../routes");
const PORT = 3000; // process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listening on port 3000! http://localhost:3000/`)
});
