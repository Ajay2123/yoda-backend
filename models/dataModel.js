const fs = require("fs");
const path = require("path");
const DATA_FILE_PATH = path.join(__dirname, "../data", "data.json");

const readDataFromFile = () => {
    const data = fs.readFileSync(DATA_FILE_PATH, "utf8");
    return JSON.parse(data);
};

const writeDataToFile = (data) => {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
};

const getAllPeople = () => {
    const data = readDataFromFile();
    return data.people;
};

const getPersonById = (id) => {
    const data = readDataFromFile();
    return data.people.find((person) => person.id === parseInt(id));
};

const updatePersonGoals = (id, goals) => {
    const data = readDataFromFile();
    const index = data.people.findIndex((person) => person.id === parseInt(id));
    if (index === -1) {
        throw new Error("Person not found");
    }
    data.people[index].goals = goals;
    writeDataToFile(data);
    return data.people[index];
};

module.exports = {
    getAllPeople,
    getPersonById,
    updatePersonGoals,
};
