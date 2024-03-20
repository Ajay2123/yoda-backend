const fs = require("fs");

/**
 * Read data from a JSON file.
 * @param {string} filePath - The path to the JSON file.
 * @returns {object} The parsed JSON data.
 */
const readDataFromFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading data from file:", error);
        return null;
    }
};

/**
 * Write data to a JSON file.
 * @param {string} filePath - The path to the JSON file.
 * @param {object} data - The data to write to the file.
 * @returns {boolean} True if writing is successful, false otherwise.
 */
const writeDataToFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error("Error writing data to file:", error);
        return false;
    }
};

module.exports = {
    readDataFromFile,
    writeDataToFile,
};
