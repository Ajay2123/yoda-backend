// app.js
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

// Use cors middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the Express app
