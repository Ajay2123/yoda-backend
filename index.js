// app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const people = require("./routes/peopleRoutes");
const goals = require("./routes/goalsRoutes");
const dailyGoals = require("./routes/dailyGoalsRoutes");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(` port ${PORT}`);
});

// Mounting the routes
app.use("/people", people);
app.use("/goals", goals);
app.use("/track", dailyGoals);

module.exports = app; // Export the Express app
