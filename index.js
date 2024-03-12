// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/dataRoutes");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(` port ${PORT}`);
});

// Mounting the routes
app.use("/api", routes);

module.exports = app; // Export the Express app
